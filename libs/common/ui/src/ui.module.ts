import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MatButtonModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [MenuButtonComponent],
  declarations: [MenuButtonComponent]
})
export class UiModule {}
