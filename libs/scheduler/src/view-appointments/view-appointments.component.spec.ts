import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentsComponent, IEvent } from './view-appointments.component';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';

import * as fromScheduler from '@ddc/scheduler/src/+state/scheduler.reducer';
import { ScheduleModule } from 'primeng/schedule';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';

describe('ViewAppointmentsComponent', () => {
  let component: ViewAppointmentsComponent;
  let fixture: ComponentFixture<ViewAppointmentsComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          scheduler: combineReducers(fromScheduler.reducers)
        }),
        ScheduleModule
      ],
      declarations: [ViewAppointmentsComponent],
      providers: [{ provide: MatDialog, value: {} }],
      schemas: [NO_ERRORS_SCHEMA]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create event with correct mapping', () => {
    const appointment = new Appointment();
    appointment.id = '1';
    appointment.name = 'Test';
    appointment.phone = '12345';
    appointment.startTime = new Date('2018-04-30T13:00:36.000Z');
    appointment.endTime = new Date('2018-04-30T14:01:36.000Z');

    expect(component.createEvent(appointment)).toEqual(jasmine.objectContaining(<IEvent>{
        id: '1',
        start: '2018-04-30T13:00:36.000Z',
        title: 'Test | 12345',
        end: '2018-04-30T14:01:36.000Z',
        color: 'red',
        appointment: appointment,
        textColor: 'white',
        className: 'appointment-event',
    }));
  });

});
