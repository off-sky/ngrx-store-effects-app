import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export const productsFeatureKey = 'products';

export interface ProductState {
    pizzas: fromPizzas.PizzaState;
    toppings: fromToppings.ToppingState;
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer,
    toppings: fromToppings.reducer
}

export const getProductState = createFeatureSelector<ProductState>(productsFeatureKey);



