import { Injectable } from '@angular/core';
import { Product } from './product';
import {PRODUCT_ITEMS} from './product-data';
import { findIndex } from 'lodash';

@Injectable()
export class ProductService {

  private pitems=PRODUCT_ITEMS;

  getProductsFromData(): Product[] {
    console.log(this.pitems);
    return this.pitems;
  }

  addProduct(product: Product) {
    this.pitems.push(product);
    console.log(this.pitems);
  }

  updateProduct(product: Product) {

    let index = findIndex(this.pitems,(p:Product) => {
      return p.id == product.id;
    });
    this.pitems[index] = product;
  }

  deleteProduct(product: Product) {

    this.pitems.splice(this.pitems.indexOf(product),1);
    console.log(this.pitems);
  }

}

// getProducts(): Product[] {
//   return [{
//     id:1,
//     name:'Scissors',
//     description:'cutting the hairs',
//     price:4.99
//   },
//   {
//     id:2,
//     name:'Knives',
//     description:'cutting the food',
//     price:10.99
//   },
//   {
//     id:3,
//     name:'Shot Glass',
//     description:'use this to take the shots',
//     price:7.15
//   }]
// }
