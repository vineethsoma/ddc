import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAppointmentsComponent } from '@ddc/scheduler/src/view-appointments/view-appointments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: ViewAppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule {}
