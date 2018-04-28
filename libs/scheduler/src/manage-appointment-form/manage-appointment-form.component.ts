import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ddc-manage-appointment-form',
  templateUrl: './manage-appointment-form.component.html',
  styleUrls: ['./manage-appointment-form.component.scss']
})
export class ManageAppointmentFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: '',
      phone: ''
    });
  }
}
