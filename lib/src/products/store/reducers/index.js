import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';
import { createFeatureSelector } from '@ngrx/store';
export var productsFeatureKey = 'products';
export var reducers = {
    pizzas: fromPizzas.reducer,
    toppings: fromToppings.reducer
};
export var getProductState = createFeatureSelector(productsFeatureKey);
//# sourceMappingURL=index.js.map