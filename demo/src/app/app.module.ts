import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import {FormsModule} from "@angular/forms";
import { NgSubmitComponent } from './ng-submit/ng-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    NgSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NgSubmitComponent]
})
export class AppModule { }
