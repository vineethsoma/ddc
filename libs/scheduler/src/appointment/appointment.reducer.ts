import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  AppointmentActions,
  AppointmentActionTypes
} from './appointment.actions';
import { Appointment } from './appointment';

export interface State extends EntityState<Appointment> {
  loading: boolean;
  ids: any[];
}

export const adapter: EntityAdapter<Appointment> = createEntityAdapter<
  Appointment
>({
  selectId: (appointment: Appointment) => appointment.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState<State>({
  loading: false,
  ids: [],
  entities: {}
});

export const reducer = (
  state = initialState,
  action: AppointmentActions
): State => {
  switch (action.type) {
    case AppointmentActionTypes.AppointmentAddSuccess: {
      console.log('Here');
      return {
        ...state,
        ...adapter.addOne(action.payload, state),
        ids: [...state.ids, action.payload.id]
      };
    }

    case AppointmentActionTypes.AppointmentUpdateSuccess: {
      const { payload: changes } = action;
      const { id } = changes;

      return {
        ...state,
        ...adapter.updateOne({ id: id, changes: changes }, state),
        loading: false
      };
    }

    case AppointmentActionTypes.AppointmentAddFail:
    default:
      return state;
  }
};
