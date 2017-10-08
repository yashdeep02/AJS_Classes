import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  template : '{{title | json}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;

  constructor(private dataService:DataService){
    this.title=dataService.getData();
  };


}
