import { Component } from '@angular/core';
import {Http,Response} from "@angular/http";

@Component({
  selector: 'app-root',
  template: '{{var_one}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  var_one;

  constructor(private http:Http){
    this.http.get("https://www.w3schools.com/angular/customers.php").subscribe((res:Response)=>{
      this.var_one=res;
    });
  }

  title = 'app';
}
