import { Injectable } from '@angular/core';

@Injectable()
export class HiddenService {

  constructor() { }

  getData(){
    return [
      {"id":111,"name":"Hello_1","age":20},
      {"id":222,"name":"Hello_2","age":22},
      {"id":333,"name":"Hello_3","age":24},
      {"id":444,"name":"Hello_4","age":26},
      {"id":555,"name":"Hello_5","age":28}
    ];
  }

}
