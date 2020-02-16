import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

import { Topping } from '../../models/topping.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'product-item',
  styleUrls: ['./product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(
    private store: Store<fromStore.ProductState>
  ) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza);
    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualise$ = this.store.select(fromStore.getPizzaVisualised);
    this.visualiseInitialToppings();
  }

  onSelect(event: number[]) {
    this.store.dispatch(fromStore.ToppingActions.visualiseToppings({ toppings: event }))
  }

  onCreate(event: Pizza) {
    this.store.dispatch(fromStore.PizzaAction.createPizza({ pizza: event }));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(fromStore.PizzaAction.updatePizza({ pizza: event }));
  }

  onRemove(event: Pizza) {
    this.store.dispatch(fromStore.PizzaAction.deletePizza({ pizza: event }));
  }

  private visualiseInitialToppings(): void {
    this.pizza$
      .pipe(
        take(1)
      )
      .subscribe(pizza => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists ? pizza.toppings.map(topping => topping.id) : [];
        this.store.dispatch(fromStore.ToppingActions.visualiseToppings({ toppings }))
      })
  }
}
