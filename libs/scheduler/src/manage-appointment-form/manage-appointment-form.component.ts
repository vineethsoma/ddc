import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';
import { debounceTime } from 'rxjs/operators';

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
  constructor(a: Appointment = new Appointment()) {
    super({
      name: new FormControl(),
      phone: new FormControl()
    });
    this.controls['name'].setValue(a.name);
    this.controls['phone'].setValue(a.phone);

    const control = this.controls['phone'];

    control.valueChanges.pipe(
      // debounceTime(100)
    )
    .subscribe((change) => control.setValue(phoneMask(change), {emitEvent: false}));

    this.appointment = a;
  }

  toAppointment() {
    const formValue = this.value;
    let a = new Appointment();

    a = Object.assign(a, { ...this.appointment, ...formValue });

    return a;
  }
}

const phoneMask = (value: string) => {
  const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
}
