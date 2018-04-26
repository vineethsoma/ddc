import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { schedulerReducer, initialState as schedulerInitialState } from './+state/scheduler.reducer';
import { SchedulerEffects } from './+state/scheduler.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('scheduler', schedulerReducer, { initialState: schedulerInitialState }), EffectsModule.forFeature([SchedulerEffects])],
  providers: [SchedulerEffects]
})
export class SchedulerModule {}
