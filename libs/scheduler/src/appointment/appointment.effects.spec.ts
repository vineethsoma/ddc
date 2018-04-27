import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { AppointmentEffects } from './appointment.effects';

describe('AppointmentService', () => {
  const actions$: Observable<any> = null;
  let effects: AppointmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(AppointmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  // TODO Add unit test for Add

  // TODO Add unit test for Update
});
