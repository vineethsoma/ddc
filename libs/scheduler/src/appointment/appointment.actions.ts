import { Action } from '@ngrx/store';
import { Appointment } from './appointment';

export enum AppointmentActionTypes {
  AppointmentAdd = '[Appointment] Add',
  AppointmentAddSuccess = '[Appointment] AddSuccess',
  AppointmentAddFail = '[Appointment] AddFail',
  
  AppointmentUpdate = '[Appointment] Update',
  AppointmentUpdateSuccess = '[Appointment] UpdateSuccess',
  AppointmentUpdateFail = '[Appointment] UpdateFail'
}

export class AppointmentAdd implements Action {
  readonly type = AppointmentActionTypes.AppointmentAdd;
  constructor(private payload: Appointment){    
  }
}
export class AppointmentAddSuccess implements Action {
  readonly type = AppointmentActionTypes.AppointmentAddSuccess;
  constructor(private payload: Appointment){
  }
}
export class AppointmentAddFail implements Action {
  readonly type = AppointmentActionTypes.AppointmentAddFail;
  constructor(private payload: Appointment){
  }
}
export class AppointmentUpdate implements Action {
  readonly type = AppointmentActionTypes.AppointmentUpdate;
  constructor(private payload: Appointment){    
  }
}
export class AppointmentUpdateSuccess implements Action {
  readonly type = AppointmentActionTypes.AppointmentUpdateSuccess;
  constructor(private payload: Appointment){
  }
}
export class AppointmentUpdateFail implements Action {
  readonly type = AppointmentActionTypes.AppointmentUpdateFail;
  constructor(private payload: Appointment){
  }
}

export type AppointmentActions = 
  AppointmentAdd |
  AppointmentAddSuccess |
  AppointmentAddFail |
  AppointmentUpdate |
  AppointmentUpdateSuccess |
  AppointmentUpdateFail ;
