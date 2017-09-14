import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {NgForDemo} from "./app.for"
import {NgIfDemo} from "./app.if";
import {NgStyleDemo} from "./app.ngstyle";
import {NgClassDemo} from "./app.ngclass";
import {Style} from "./app.style"
import {NgNonBindableDemo} from './app.nonbindable'
@NgModule({
  declarations: [
    AppComponent,
    NgForDemo,
    NgIfDemo,
    NgStyleDemo,
    NgClassDemo,
    Style,
    NgNonBindableDemo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgNonBindableDemo]
})
export class AppModule { }
