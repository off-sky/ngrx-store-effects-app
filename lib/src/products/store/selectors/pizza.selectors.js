import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
export var getPizzaState = createSelector(fromFeature.getProductState, function (state) { return state.pizzas; });
export var getPizzaEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export var getAllPizzas = createSelector(getPizzaEntities, function (entities) { return Object.values(entities); });
export var getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export var getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export var selectedPizzaId = createSelector(fromRoot.getRouterState, function (router) { return !!router.state.params && router.state.params.pizzaId; });
export var getSelectedPizza = createSelector(getPizzaEntities, fromRoot.getRouterState, function (entities, router) {
    return !!router.state && entities[router.state.params.pizzaId];
});
//# sourceMappingURL=pizza.selectors.js.map