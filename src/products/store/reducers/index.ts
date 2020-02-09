import * as fromRoot from '../../../app/store';
import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export const productsFeatureKey = 'products';

export interface ProductState {
    pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductState>(productsFeatureKey);



