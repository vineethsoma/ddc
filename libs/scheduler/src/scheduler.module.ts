import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers as schedulerReducer } from './+state/scheduler.reducer';
import { SchedulerEffects } from './+state/scheduler.effects';
import { ScheduleModule } from "primeng/schedule";
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    StoreModule.forFeature('scheduler', schedulerReducer),
    EffectsModule.forFeature([SchedulerEffects]),
    ScheduleModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [SchedulerEffects],
  declarations: [ViewAppointmentsComponent]
})
export class SchedulerModule {}
