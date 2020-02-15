import { __assign } from "tslib";
import * as fromActions from '../actions/toppings.action';
import { createReducer, on } from '@ngrx/store';
export var initialState = {
    loaded: false,
    loading: false,
    entities: {},
    selectedToppings: []
};
var toppingReducer = createReducer(initialState, on(fromActions.ToppingActions.loadToppings, function (state) { return (__assign(__assign({}, state), { loading: true })); }), on(fromActions.ToppingActions.loadToppingsFail, function (state) { return (__assign(__assign({}, state), { loading: false, loaded: false })); }), on(fromActions.ToppingActions.loadToppingsSuccess, function (state, action) {
    var toppingEntities = action.toppings.reduce(function (entities, topping) {
        var _a;
        return __assign(__assign({}, entities), (_a = {}, _a[topping.id] = topping, _a));
    }, {});
    return __assign(__assign({}, state), { loaded: true, loading: false, entities: toppingEntities });
}), on(fromActions.ToppingActions.visualiseToppings, function (state, action) {
    return __assign(__assign({}, state), { selectedToppings: action.toppings });
}));
export function reducer(state, action) {
    return toppingReducer(state, action);
}
export var getToppingsEntities = function (state) { return state.entities; };
export var getToppingsLoading = function (state) { return state.loading; };
export var getToppingsLoaded = function (state) { return state.loaded; };
export var getSelectedToppings = function (state) { return state.selectedToppings; };
//# sourceMappingURL=toppings.reducer.js.map