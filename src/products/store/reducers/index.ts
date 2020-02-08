import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

export const productsFeatureKey = 'products';

export interface ProductState {
    pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductState>(productsFeatureKey);

// pizza state

export const getPizzaState = createSelector<ProductState, any, fromPizzas.PizzaState>(
    getProductState,
    (state: ProductState) => state.pizzas
);

export const getPizzaEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
    getPizzaEntities,
    (entities) => Object.values(entities)
)

export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading
);

export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded
);
