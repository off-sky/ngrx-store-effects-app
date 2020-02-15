import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';
import { createSelector } from '@ngrx/store';
export var getToppingsState = createSelector(fromFeature.getProductState, function (state) { return state.toppings; });
export var getToppingsEntities = createSelector(getToppingsState, fromToppings.getToppingsEntities);
export var getAllToppings = createSelector(getToppingsEntities, function (entities) { return Object.values(entities); });
export var getToppingsLoaded = createSelector(getToppingsState, fromToppings.getToppingsLoaded);
export var getToppingsLoading = createSelector(getToppingsState, fromToppings.getToppingsLoading);
export var getSelectedToppings = createSelector(getToppingsState, fromToppings.getSelectedToppings);
//# sourceMappingURL=toppings.selectors.js.map