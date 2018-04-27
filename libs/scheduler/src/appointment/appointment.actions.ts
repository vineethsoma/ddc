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
  constructor(public payload: Appointment){    
  }
}
export class AppointmentAddSuccess implements Action {
  readonly type = AppointmentActionTypes.AppointmentAddSuccess;
  constructor(public payload: any){
  }
}
export class AppointmentAddFail implements Action {
  readonly type = AppointmentActionTypes.AppointmentAddFail;
  constructor(public payload: Appointment){
  }
}
export class AppointmentUpdate implements Action {
  readonly type = AppointmentActionTypes.AppointmentUpdate;
  constructor(public payload: Appointment){    
  }
}
export class AppointmentUpdateSuccess implements Action {
  readonly type = AppointmentActionTypes.AppointmentUpdateSuccess;
  constructor(public payload: Appointment){
  }
}
export class AppointmentUpdateFail implements Action {
  readonly type = AppointmentActionTypes.AppointmentUpdateFail;
  constructor(public payload: Appointment){
  }
}

export type AppointmentActions = 
  AppointmentAdd |
  AppointmentAddSuccess |
  AppointmentAddFail |
  AppointmentUpdate |
  AppointmentUpdateSuccess |
  AppointmentUpdateFail ;
