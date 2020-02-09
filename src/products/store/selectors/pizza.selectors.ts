import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import { Pizza } from 'src/products/models/pizza.model';

export const getPizzaState = createSelector<fromFeature.ProductState, any, fromPizzas.PizzaState>(
    fromFeature.getProductState,
    (state: fromFeature.ProductState) => state.pizzas
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

export const selectedPizzaId = createSelector(
    fromRoot.getRouterState,
    (router) => !!router.state.params && router.state.params.pizzaId
);

export const getSelectedPizza = createSelector(
    getPizzaEntities,
    fromRoot.getRouterState,
    (entities: any, router: any): Pizza => {
        return !!router.state && entities[router.state.params.pizzaId]
    }
);