import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { SchedulerActions, SchedulerActionTypes } from './scheduler.actions';

import * as fromAppointments from '../appointment/appointment.reducer';

/**
 * Interface for the 'Scheduler' data used in
 *  - SchedulerState, and
 *  - schedulerReducer
 */
export interface SchedulerData {
  appointments: fromAppointments.State;
}

/**
 * Interface to the part of the Store containing SchedulerState
 * and other information related to SchedulerData.
 */
export interface SchedulerState {
  readonly scheduler: SchedulerData;
}

// export const initialState: SchedulerState = {
//   scheduler: {
//     appointments: fromAppointments.initialState
//   }
// };

export const reducers = {
  appointments: fromAppointments.reducer
};

export const getSchedulerState = createFeatureSelector<SchedulerData>(
  'scheduler'
);

export const getAppointmentEntitiesState = createSelector(
  getSchedulerState,
  state => state.appointments
);

export const {
  selectIds: getAppointmentIds,
  selectEntities: getAppointmentEntities,
  selectAll: getAllAppointments,
  selectTotal: getTotalAppointments
} = fromAppointments.adapter.getSelectors(getAppointmentEntitiesState);
