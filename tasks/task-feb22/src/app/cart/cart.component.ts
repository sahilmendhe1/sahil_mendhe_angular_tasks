import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../home/home.component';
import { DataSource } from '@angular/cdk/collections';
import { of } from 'rxjs';
import { multiply } from '@angular/flex-layout/core/multiply/multiplier';
import { pipe } from 'rxjs';

export interface PeriodicElement {
  quantity: number;
  name: string;
  id: number;
  totalPrice: number;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1000, name: "Iphone11", quantity: 2, totalPrice: 69720 },
  // { id: 1001, name: "Iphone12", quantity: 2, totalPrice: 4.0026 },
  // { id: 1002, name: "Iphone13", quantity: 2, totalPrice: 6.941 },
  // { id: 1003, name: "Iphone14", quantity: 2, totalPrice: 6.941 },
];


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  price :number = 69720;
  displayedColumns: string[] = ['id', 'name', 'quantity', 'totalPrice']
  dataSource = ELEMENT_DATA;
  totalPrices:number = 0;

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');

    this.count$.subscribe(count => {
      console.log(count*this.price);
    });
    this.count$.subscribe(count => {
      return of(count*this.price);
    });

  }

  totalPrice():any {
    return pipe(
      this.dataSource,
      multiply(this.price)
    )(this.dataSource);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}



