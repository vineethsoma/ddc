import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { Appointment, AppointmentDto } from './appointment';


describe('Appointment', () => {
  const actions$: Observable<any> = null;

  beforeEach(() => {
    // Setup Appoitment dependencies here
  });

  it('should be created', () => {
    const appointment = new Appointment();
    expect(appointment).toBeTruthy();
  });

  it('should be created from dto', () => {
    const dto = <AppointmentDto>{
      id: '1',
      name: 'Test',
      phone: '12345',
      endTime: '2018-04-30T14:01:36+00:00',
      startTime: '2018-04-30T13:00:36+00:00'
    }

    const appointment = Appointment.from(dto);
    expect(appointment).toBeTruthy();
  });

  it('should match dto key/value mapping', () => {
    const dto = <AppointmentDto>{
      id: '1',
      name: 'Test',
      phone: '12345',
      endTime: '2018-04-30T14:01:36+00:00',
      startTime: '2018-04-30T13:00:36+00:00'
    }

    const appointment = Appointment.from(dto);
    expect(appointment).toEqual(jasmine.objectContaining(<Appointment>{
      id: '1',
      name: 'Test',
      phone: '12345',
      endTime: new Date('2018-04-30T14:01:36+00:00'),
      startTime: new Date('2018-04-30T13:00:36+00:00')
    }));
  });

  it('should create dto with correct mapping', () => {
    const appointment = new Appointment();
    appointment.id = '1';
    appointment.name = 'Test';
    appointment.phone = '12345';
    appointment.startTime = new Date('2018-04-30T13:00:36.000Z');
    appointment.endTime = new Date('2018-04-30T14:01:36.000Z');

    expect(appointment.createRequestDto()).toEqual(jasmine.objectContaining(<AppointmentDto>{
      id: '1',
      name: 'Test',
      phone: '12345',
      startTime: '2018-04-30T13:00:36.000Z',
      endTime: '2018-04-30T14:01:36.000Z',
    }));
  });

  it('should throw error if appointment created from dto without id', () => {
    const dto = <AppointmentDto>{
      name: 'Test',
      phone: '12345',
      endTime: '2018-04-30T14:01:36+00:00',
      startTime: '2018-04-30T13:00:36+00:00'
    };

    // Needs anonymous function to work
    expect(() => { Appointment.from(dto) }).toThrow(new Error(
      'Id is missing! Check the transport object' + JSON.stringify(dto)
    ));
  });
});
