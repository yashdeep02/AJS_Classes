import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  customerObj:Customer=new Customer();

  constructor() { }

  ngOnInit() {
  }

}
