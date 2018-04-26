import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiModule as CommonUiModule } from "@ddc/common/ui";

export const uiRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonUiModule
  ],
  declarations: [HomeComponent]
})
export class UiModule {}
