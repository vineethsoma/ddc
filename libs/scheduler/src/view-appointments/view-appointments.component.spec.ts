import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentsComponent } from './view-appointments.component';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';

import * as fromScheduler from '@ddc/scheduler/src/+state/scheduler.reducer';
import { ScheduleModule } from 'primeng/schedule';

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
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
