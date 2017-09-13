import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {NgForDemo} from "./app.for"
import {NgIfDemo} from "./app.if";

@NgModule({
  declarations: [
    AppComponent,
    NgForDemo,
    NgIfDemo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgIfDemo]
})
export class AppModule { }
