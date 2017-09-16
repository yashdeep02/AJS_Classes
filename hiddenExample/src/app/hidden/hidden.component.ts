import { Component, OnInit } from '@angular/core';
import { HiddenService} from "../hidden.service";

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent implements OnInit {
  data;
  constructor(private my_service:HiddenService) {
     this.data=my_service.getData();
  }

  ngOnInit() {
  }

  clickMe(x){
    if(x.id==111){
      alert("First Element");
    }else{
      alert("Last Element");
    }
  }
}
