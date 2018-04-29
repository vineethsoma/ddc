import { reducer, initialState, State } from './appointment.reducer';
import { Appointment } from './appointment';

import * as Moment from 'moment';
import {
  AppointmentAddSuccess,
  AppointmentAdd,
  AppointmentAddFail,
  AppointmentUpdate,
  AppointmentUpdateSuccess,
  AppointmentUpdateFail
} from './appointment.actions';

describe('Appointment Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('Add action', () => {
    it('should return the initial state', () => {
      const action = new AppointmentAdd(null);

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('AddSuccess action', () => {
    const a = getTestAppointment();
    it('should return new state with appointment', () => {
      const action = new AppointmentAddSuccess(a);

      const result = reducer(initialState, action);

      expect(result).toEqual(<State>{
        ids: ['1'],
        loading: false,
        entities: {
          '1': a
        }
      });
    });
  });

  describe('Add Fail action', () => {
    const a = getTestAppointment();
    it('should return new state with appointment', () => {
      const action = new AppointmentAddFail(a);

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('Update action', () => {
    it('should return the initial state', () => {
      const action = new AppointmentUpdate(null);

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('UpdateSuccess action', () => {
    const a = getTestAppointment();

    a.name = 'Test User 2';
    it('should return new state with appointment change', () => {
      const action = new AppointmentUpdateSuccess(a);

      const result = reducer(getTestAppointmentState(), action);

      // The test fails without Object.assign(new Object(), a) because updateOne function on EntityAdapter returns Object instead of Appointment
      // Refer here - https://github.com/jasmine/jasmine/issues/598
      expect(result).toEqual(<State>{
        ids: ['1'],
        loading: false,
        entities: {
          '1': Object.assign(new Object(), a)
        }
      });
    });
  });

  describe('Update Fail action', () => {
    const a = getTestAppointment();
    it('should return new state with appointment', () => {
      const action = new AppointmentUpdateFail(a);

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

function getDateMinutesAgo(mins: number) {
  return Moment()
    .subtract(mins, 'minutes')
    .toISOString();
}

function getTestAppointment() {
  const a = new Appointment();

  a.id = '1';
  a.name = 'Test';
  a.phone = '1234';
  a.startTime = new Date(getDateMinutesAgo(60));
  a.endTime = new Date(getDateMinutesAgo(30));

  return a;
}

function getTestAppointmentState() {
  const a = getTestAppointment();

  return <State>{
    ids: [a.id],
    entities: {
      [a.id]: a
    },
    loading: true
  };
}
