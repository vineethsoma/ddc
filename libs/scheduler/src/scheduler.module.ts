import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers as schedulerReducer } from './+state/scheduler.reducer';
import { SchedulerEffects } from './+state/scheduler.effects';
import { ScheduleModule } from "primeng/schedule";
import { SchedulerRoutingModule } from '@ddc/scheduler/src/scheduler-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    StoreModule.forFeature('scheduler', schedulerReducer),
    EffectsModule.forFeature([SchedulerEffects]),
    ScheduleModule
  ],
  providers: [SchedulerEffects]
})
export class SchedulerModule {}
