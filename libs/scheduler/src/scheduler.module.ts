import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers as schedulerReducer } from './+state/scheduler.reducer';
import { SchedulerEffects } from './+state/scheduler.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('scheduler', schedulerReducer),
    EffectsModule.forFeature([SchedulerEffects])
  ],
  providers: [SchedulerEffects]
})
export class SchedulerModule {}
