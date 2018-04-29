import { Action } from '@ngrx/store';

export enum SchedulerActionTypes {
  SchedulerAction = '[Scheduler] Action',
  LoadScheduler = '[Scheduler] Load Data',
  SchedulerLoaded = '[Scheduler] Data Loaded'
}

export class Scheduler implements Action {
  readonly type = SchedulerActionTypes.SchedulerAction;
}
export class LoadScheduler implements Action {
  readonly type = SchedulerActionTypes.LoadScheduler;
  constructor(public payload: any) {}
}

export class SchedulerLoaded implements Action {
  readonly type = SchedulerActionTypes.SchedulerLoaded;
  constructor(public payload: any) {}
}

export type SchedulerActions = Scheduler | LoadScheduler | SchedulerLoaded;
