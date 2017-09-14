import {Component} from "@angular/core";
@Component({
    selector:"app-root",
    template:"<h1><pre ngNonBindable>{{data}}</pre></h1>"
})
export class NgNonBindableDemo{
  data="Welcome";
}
