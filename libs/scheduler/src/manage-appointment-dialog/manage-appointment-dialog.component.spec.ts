import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentDialogComponent } from './manage-appointment-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ManageAppointmentDialogComponent', () => {
  let component: ManageAppointmentDialogComponent;
  let fixture: ComponentFixture<ManageAppointmentDialogComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ManageAppointmentDialogComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          {provide: MatDialogRef, value: {}},
          {provide: MAT_DIALOG_DATA, value: {}}
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
