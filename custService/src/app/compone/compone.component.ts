import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent implements OnInit {

  var_one;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.var_one = this.dataService.getData();
  }

}
