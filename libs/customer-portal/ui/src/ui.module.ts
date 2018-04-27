import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiModule as CommonUiModule } from '@ddc/common/ui';
import { ShellComponent } from './shell/shell.component';

export const uiRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'scheduler',
        // Add the lazy loaded module to the app's tsconfig.app.json. For example look at customer-portal/tsconfig.app.json
        loadChildren: '@ddc/scheduler#SchedulerModule'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule, CommonUiModule],
  declarations: [HomeComponent, ShellComponent]
})
export class UiModule {}
