import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MatButtonModule } from "@angular/material";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [MenuButtonComponent, HeaderComponent, FooterComponent],
  declarations: [MenuButtonComponent, HeaderComponent, FooterComponent]
})
export class UiModule {}
