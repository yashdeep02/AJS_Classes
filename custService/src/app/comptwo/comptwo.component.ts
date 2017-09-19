import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {

  var_two;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.var_two=this.dataService.getData();
  }

}
