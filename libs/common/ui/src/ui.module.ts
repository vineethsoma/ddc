import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  exports: [MenuButtonComponent, HeaderComponent, FooterComponent],
  declarations: [MenuButtonComponent, HeaderComponent, FooterComponent]
})
export class UiModule {}
