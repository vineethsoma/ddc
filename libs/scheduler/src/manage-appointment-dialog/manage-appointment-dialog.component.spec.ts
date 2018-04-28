import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentDialogComponent } from './manage-appointment-dialog.component';

describe('ManageAppointmentDialogComponent', () => {
  let component: ManageAppointmentDialogComponent;
  let fixture: ComponentFixture<ManageAppointmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAppointmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
