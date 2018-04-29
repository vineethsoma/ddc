import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AppointmentActions,
  AppointmentActionTypes,
  AppointmentAdd,
  AppointmentAddSuccess,
  AppointmentAddFail,
  AppointmentUpdateSuccess,
  AppointmentUpdateFail
} from './appointment.actions';

import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs/observable/of';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

// TODO: Refactor to backend module
const mockCreateAppointmentBackendCall = (a: Appointment, id) => {
  return observableOf({ ...a.createRequestDto(), id: id });
};

@Injectable()
export class AppointmentEffects {
  private idCounter = 1;

  @Effect()
  addAppointment$: Observable<Action> = this.actions$.pipe(
    ofType<AppointmentAdd>(AppointmentActionTypes.AppointmentAdd),
    tap(({ type }) => console.log(type)),
    map(({ payload }) => payload),
    switchMap(a => {
      // Real backend call would happen here
      return mockCreateAppointmentBackendCall(a, this.idCounter++).pipe(
        map(dto => new AppointmentAddSuccess(Appointment.from(dto))),
        // Add fails if there is an error in appointment creation, this can be used for logging.
        catchError(err => observableOf(new AppointmentAddFail(err)))
      );
    })
  );

  // Act on Add Failure
  @Effect({ dispatch: false })
  addFail$: Observable<void> = this.actions$.pipe(
    ofType<AppointmentAddFail>(AppointmentActionTypes.AppointmentAddFail),
    tap(({ type }) => console.log(type)),
    map(({ payload }) => payload),
    map(err => {
      // Good place to call a logger service
      console.log(err);
    })
  );

  @Effect()
  updateAppointment$: Observable<Action> = this.actions$.pipe(
    ofType<AppointmentAdd>(AppointmentActionTypes.AppointmentUpdate),
    tap(({ type }) => console.log(type)),
    map(({ payload }) => payload),
    switchMap(a => {
      // Real backend call would happen here
      return mockCreateAppointmentBackendCall(a, a.id).pipe(
        map(dto => new AppointmentUpdateSuccess(Appointment.from(dto))),
        // Update fails if there is an error in appointment creation, this can be used for logging.
        catchError(err => observableOf(new AppointmentUpdateFail(err)))
      );
    })
  );

  // Act on Update Failure
  @Effect({ dispatch: false })
  updateFail$: Observable<void> = this.actions$.pipe(
    ofType<AppointmentUpdateFail>(AppointmentActionTypes.AppointmentUpdateFail),
    tap(({ type }) => console.log(type)),
    map(({ payload }) => payload),
    map(err => {
      // Good place to call a logger service
      console.log(err);
    })
  );

  constructor(private actions$: Actions) {}
}
