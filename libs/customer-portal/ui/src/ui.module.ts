import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiModule as CommonUiModule } from "@ddc/common/ui";
import { ShellComponent } from './shell/shell.component';

export const uiRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonUiModule
  ],
  declarations: [HomeComponent, ShellComponent]
})
export class UiModule {}
