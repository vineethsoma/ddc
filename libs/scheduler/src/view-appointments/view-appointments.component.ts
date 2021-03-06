import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../+state/scheduler.reducer';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';
import { Observable } from 'rxjs/Observable';
import {
  AppointmentAdd,
  AppointmentUpdate
} from '@ddc/scheduler/src/appointment/appointment.actions';
import { Schedule } from 'primeng/schedule';

import * as Moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatDialog } from '@angular/material';
import { ManageAppointmentDialogComponent } from '@ddc/scheduler/src/manage-appointment-dialog/manage-appointment-dialog.component';
import { map, tap, share } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAppointmentsComponent implements OnInit, AfterViewInit {
  @ViewChild('scheduler') schedule: Schedule;
  private _currentDate: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  today = new Date();
  appointments$: Observable<Appointment[]>;
  events$: Observable<IEvent[]>;
  constructor(
    private store: Store<fromStore.SchedulerState>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.appointments$ = this.store.select(fromStore.getAllAppointments);
    this.events$ = this.appointments$.pipe(
      map(list => list.map(this.createEvent))
    );
  }

  get currentDate$() {
    return this._currentDate.asObservable().pipe(share());
  }

  get isToday$() {
    return this.currentDate$.pipe(
      map(date => Moment(date).isSame(this.today, 'day'))
    );
  }

  ngAfterViewInit() {
    this.updateCurrentDate();
    this.schedule.onDayClick.subscribe(_event => this.selectTimeSlot(_event));
    this.schedule.onEventClick.subscribe(_event => this.selectEvent(_event));
  }

  selectTimeSlot(event: any) {
    const a = new Appointment();
    const { date: startMoment } = event;
    const endMoment = startMoment.clone().add(1, 'hour');
    a.startTime = startMoment.toDate();
    a.endTime = endMoment.toDate();

    const dialogRef = this.dialog.open(ManageAppointmentDialogComponent, {
      data: {
        appointment: a
      }
    });

    dialogRef.beforeClose().subscribe(result => {
      this.saveAppointment(result);
    });
  }

  selectEvent(event: any) {
    const dialogRef = this.dialog.open(ManageAppointmentDialogComponent, {
      data: {
        appointment: event.calEvent.appointment
      }
    });

    dialogRef.beforeClose().subscribe(result => {
      this.saveAppointment(result);
    });
  }

  saveAppointment(result) {
    if (result) {
      const _a: Appointment = result;

      if (_a.id) {
        this.updateAppointment(_a);
      } else {
        this.addAppointment(_a);
      }
    }
  }

  createEvent(a: Appointment) {
    return <IEvent>{
      id: a.id,
      start: a.startTime.toISOString(),
      title: `${a.name} | ${a.phone}`,
      end: a.endTime.toISOString(),
      color: a.id ? 'red' : 'blue',
      appointment: a,
      textColor: 'white',
      className: 'appointment-event'
    };
  }

  private addAppointment(a: Appointment) {
    this.store.dispatch(new AppointmentAdd(a));
  }

  private updateAppointment(a: Appointment) {
    this.store.dispatch(new AppointmentUpdate(a));
  }

  next() {
    this.schedule.next();
    this.updateCurrentDate();
  }
  previous() {
    this.schedule.prev();
    this.updateCurrentDate();
  }
  updateCurrentDate() {
    this._currentDate.next(this.schedule.getDate().toDate());
  }
}

export interface IEvent {
  id: string;
  start: string;
  end: string;
  title: string;
  color: 'blue' | 'red';
  appointment?: Appointment;
  textColor: 'white',
  className: string
}
