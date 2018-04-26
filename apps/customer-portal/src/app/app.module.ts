import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { uiRoutes, UiModule } from '@ddc/customer-portal/ui';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    UiModule,
    RouterModule.forRoot([
      {path: '', children: uiRoutes}
    ], { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
