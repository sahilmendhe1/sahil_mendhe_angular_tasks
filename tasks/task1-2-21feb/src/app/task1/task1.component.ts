import { Component } from '@angular/core';
import {filter, map, of, reduce} from 'rxjs'
export interface Product {
  pName: string,
  price: number
}
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  products: string[] = [];
  priceSumProducts: number=0;
  ngOnInit() {
    let productNames = of(
      { pName: "televison", price: 17999 },
      { pName: "air conditioner", price: 32499 },
      { pName: "smartphone", price: 24299 },
      { pName: "washing machine", price: 37999 },
      { pName: "dish washer", price: 52499 }
    ).pipe(map(product => product.pName));
    productNames.subscribe(x => this.products.push(x));
    let priceSum = of(
      { pName: "televison", price: 17999 },
      { pName: "air conditioner", price: 32499 },
      { pName: "smartphone", price: 24299 },
      { pName: "washing machine", price: 37999 },
      { pName: "dish washer", price: 52499 }
    ).pipe(filter(product => product.price > 30000), reduce((sum, product) => sum + product.price, 0));
    priceSum.subscribe(x => this.priceSumProducts = x);
  }
}