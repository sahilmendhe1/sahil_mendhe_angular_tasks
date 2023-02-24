import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export interface PeriodicElement {
  quantity: number;
  id: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1000, quantity: 2, price: 67720 },
  { id: 1001, quantity: 2, price: 67720 }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
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
