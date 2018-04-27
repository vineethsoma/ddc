import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../+state/scheduler.reducer';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';
import { Observable } from 'rxjs/Observable';
import { AppointmentAdd, AppointmentUpdate } from '@ddc/scheduler/src/appointment/appointment.actions';
import { TimeSlotsOptions } from '@ddc/scheduler/src/time-slots/time-slots.component';
import { TimeSlot } from '@ddc/scheduler/src/time-slot/time-slot.component';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  constructor(private store: Store<fromStore.SchedulerState>) { }

  ngOnInit() {
    this.appointments$ = this.store.select(fromStore.getAllAppointments);

    this.appointments$.subscribe(console.log)
  }

  addAppointment(a: Appointment) {
    this.store.dispatch(new AppointmentAdd(a));
  }

  updateAppointment(a: Appointment) {
    this.store.dispatch(new AppointmentUpdate(a));
  }
}


