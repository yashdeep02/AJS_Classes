import {Component} from "@angular/core";

@Component({
  selector:"ng-style",
  templateUrl:"./app.ngstyle.html"
})
export class NgStyleDemo{
  array:any[]=[
    {'id':111,'name':'Hello_1'},
    {'id':222,'name':'Hello_2'},
    {'id':333,'name':'Hello_3'},
    {'id':444,'name':'Hello_4'},
    {'id':555,'name':'Hello_5'}
  ];

  getColor(id){
    switch (id){
      case 111:
          return 'red';
      case 222:
          return 'green';
      case 333:
          return 'blue';
      case 444:
          return 'pink';
      case 555:
          return 'brown';
    }
  }


}
