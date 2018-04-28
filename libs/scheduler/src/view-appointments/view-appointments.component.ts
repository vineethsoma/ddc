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

import { Moment } from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
  appointments$: Observable<Appointment[]>;
  constructor(private store: Store<fromStore.SchedulerState>) {}

  ngOnInit() {
    this.appointments$ = this.store.select(fromStore.getAllAppointments);
    this.appointments$.subscribe(console.log);
    this.schedule.onDayClick.subscribe(console.log);
    this.currentDate$.subscribe(console);
  }

  get currentDate$() {
    return this._currentDate.asObservable();
  }
  ngAfterViewInit() {
    this.updateCurrentDate();
  }

  selectTimeSlot() {}

  addAppointment(a: Appointment) {
    this.store.dispatch(new AppointmentAdd(a));
  }

  updateAppointment(a: Appointment) {
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
    this._currentDate.next((this.schedule.getDate() as Moment).toDate());
  }
}
