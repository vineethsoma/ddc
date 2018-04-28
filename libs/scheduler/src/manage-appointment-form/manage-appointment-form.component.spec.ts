import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentFormComponent } from './manage-appointment-form.component';

describe('ManageAppointmentFormComponent', () => {
  let component: ManageAppointmentFormComponent;
  let fixture: ComponentFixture<ManageAppointmentFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ManageAppointmentFormComponent]
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
