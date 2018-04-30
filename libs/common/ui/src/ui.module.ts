import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';
@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  exports: [MenuButtonComponent, HeaderComponent, FooterComponent, MenuButtonsComponent],
  declarations: [MenuButtonComponent, HeaderComponent, FooterComponent, MenuButtonsComponent]
})
export class UiModule {}
