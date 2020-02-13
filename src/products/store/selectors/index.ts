import * as fromPizzas from './pizza.selectors';
import * as fromToppings from './toppings.selectors';
import { createSelector } from '@ngrx/store';

export * from './pizza.selectors';
export * from './toppings.selectors';

export const getPizzaVisualised = createSelector(
    fromPizzas.getSelectedPizza,
    fromToppings.getToppingsEntities,
    fromToppings.getSelectedToppings,
    (pizza, toppingEntities, selectedToppings) => {
        const toppings = selectedToppings.map(toppingId => toppingEntities[toppingId]);
        return { ...pizza, toppings };
    }
)