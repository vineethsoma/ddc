import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers as schedulerReducer } from './+state/scheduler.reducer';
import { SchedulerEffects } from './+state/scheduler.effects';
import { ScheduleModule } from 'primeng/schedule';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { ManageAppointmentFormComponent } from './manage-appointment-form/manage-appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageAppointmentDialogComponent } from './manage-appointment-dialog/manage-appointment-dialog.component';
import { AppointmentEffects } from '@ddc/scheduler/src/appointment/appointment.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SchedulerRoutingModule,
    StoreModule.forFeature('scheduler', schedulerReducer),
    EffectsModule.forFeature([SchedulerEffects, AppointmentEffects]),
    ScheduleModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [SchedulerEffects],
  declarations: [
    ViewAppointmentsComponent,
    ManageAppointmentFormComponent,
    ManageAppointmentDialogComponent
  ],
  entryComponents: [ManageAppointmentDialogComponent]
})
export class SchedulerModule {}
