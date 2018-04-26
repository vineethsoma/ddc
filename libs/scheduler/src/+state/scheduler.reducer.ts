import { Action } from '@ngrx/store';
import { SchedulerActions, SchedulerActionTypes } from './scheduler.actions';

/**
 * Interface for the 'Scheduler' data used in
 *  - SchedulerState, and
 *  - schedulerReducer
 */
export interface SchedulerData {}

/**
 * Interface to the part of the Store containing SchedulerState
 * and other information related to SchedulerData.
 */
export interface SchedulerState {
  readonly scheduler: SchedulerData;
}

export const initialState: SchedulerData = {};

export function schedulerReducer(
  state = initialState,
  action: SchedulerActions
): SchedulerData {
  switch (action.type) {
    case SchedulerActionTypes.SchedulerAction:
      return state;

    case SchedulerActionTypes.SchedulerLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
