import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Appointment } from '@ddc/scheduler/src/appointment/appointment';

@Component({
  selector: 'ddc-manage-appointment-dialog',
  templateUrl: './manage-appointment-dialog.component.html',
  styleUrls: ['./manage-appointment-dialog.component.scss']
})
export class ManageAppointmentDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ManageAppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }
  save(a: Appointment) {
    this.dialogRef.close(a);
  }
}
