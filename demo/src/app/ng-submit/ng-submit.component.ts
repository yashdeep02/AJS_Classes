import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-submit',
  templateUrl: './ng-submit.component.html',
  styleUrls: ['./ng-submit.component.css']
})
export class NgSubmitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  array:any[]=[
    "AngularJS",
    "Angular4",
    "NodeJS",
    "MongoDB"
  ];

  my_fun(arg1){
    //this.array.push(arg1);
    this.array.unshift(arg1);
  }

}
