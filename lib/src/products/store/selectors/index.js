import { __assign } from "tslib";
import * as fromPizzas from './pizza.selectors';
import * as fromToppings from './toppings.selectors';
import { createSelector } from '@ngrx/store';
export * from './pizza.selectors';
export * from './toppings.selectors';
export var getPizzaVisualised = createSelector(fromPizzas.getSelectedPizza, fromToppings.getToppingsEntities, fromToppings.getSelectedToppings, function (pizza, toppingEntities, selectedToppings) {
    var toppings = selectedToppings.map(function (toppingId) { return toppingEntities[toppingId]; });
    return __assign(__assign({}, pizza), { toppings: toppings });
});
//# sourceMappingURL=index.js.map