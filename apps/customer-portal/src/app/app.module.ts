import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { uiRoutes, UiModule } from '@ddc/customer-portal/ui';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    UiModule,
    RouterModule.forRoot([{ path: '', children: uiRoutes }], {
      initialNavigation: 'enabled'
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
