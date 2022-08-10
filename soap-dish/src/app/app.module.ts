import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbdAlertBasic } from './app.component';

@NgModule({
  declarations: [
    ngbd-alert-basic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NgbdAlertBasic]
})
export class AppModule { }
