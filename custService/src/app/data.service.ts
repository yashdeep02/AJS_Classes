import { Injectable } from '@angular/core';
import {Products} from "./products";
import {PRODUCTS} from "./products-list";

@Injectable()
export class DataService {

  constructor() { }

  getData():Promise<Products[]>{
    return Promise.resolve(PRODUCTS);
  }

}
