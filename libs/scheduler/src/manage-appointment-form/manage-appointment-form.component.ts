import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';

@Component({
  selector: 'ddc-manage-appointment-form',
  templateUrl: './manage-appointment-form.component.html',
  styleUrls: ['./manage-appointment-form.component.scss']
})
export class ManageAppointmentFormComponent implements OnInit {
  @Input() appointment: Appointment;
  form: AppointmentFormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new AppointmentFormGroup(this.appointment);
  }
}
class AppointmentFormGroup extends FormGroup {
  appointment: Appointment;
  constructor(a: Appointment = new Appointment()){
    super({
      name: new FormControl(),
      phone: new FormControl()
    });
    this.controls['name'].setValue(a.name);
    this.controls['phone'].setValue(a.phone);

    this.appointment = a;
  }

  toAppointment() {
    const formValue = this.value;
    let a = new Appointment();

    a = Object.assign(a, {...this.appointment, ...formValue});

    return a;

  }
}
