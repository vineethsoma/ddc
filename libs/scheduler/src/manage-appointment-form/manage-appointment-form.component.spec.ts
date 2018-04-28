import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentFormComponent } from './manage-appointment-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ManageAppointmentFormComponent', () => {
  let component: ManageAppointmentFormComponent;
  let fixture: ComponentFixture<ManageAppointmentFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ManageAppointmentFormComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
