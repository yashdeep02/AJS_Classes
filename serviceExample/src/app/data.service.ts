import { Injectable } from '@angular/core';
import { products} from "./products";
import { PRODUCTS} from "./products_list";

@Injectable()
export class DataService {

  constructor() { }

  getData():Promise<products[]>{
    return Promise.resolve(PRODUCTS);
  }
}

