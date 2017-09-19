import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from "./data.service";
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { CompthreeComponent } from './compthree/compthree.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    ComptwoComponent,
    CompthreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [CompthreeComponent]
})
export class AppModule { }
