import {Component} from "@angular/core";
@Component({
  selector:"app-root",
  templateUrl:"./for.html"
})
export class NgForDemo{
  array=[10,20,30,40,50];

  array_two=[{'id':1,'name':'p_one','cost':10000},
    {'id':2,'name':'p_two','cost':20000},
    {'id':3,'name':'p_three','cost':30000},
    {'id':4,'name':'p_four','cost':40000},
    {'id':5,'name':'p_five','cost':50000}];

}
