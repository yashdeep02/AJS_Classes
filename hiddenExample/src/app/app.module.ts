import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HiddenService } from "./hidden.service";
import { HiddenComponent } from './hidden/hidden.component';

@NgModule({
  declarations: [
    AppComponent,
    HiddenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HiddenService],
  bootstrap: [HiddenComponent]
})
export class AppModule { }
