import { __assign } from "tslib";
import { createReducer, on } from '@ngrx/store';
import { PizzaAction } from '../actions/pizzas.action';
export var initialState = {
    entities: {},
    loaded: false,
    loading: false
};
export var pizzaReducer = createReducer(initialState, on(PizzaAction.loadPizzas, function (state) { return (__assign(__assign({}, state), { loaded: false, loading: true })); }), on(PizzaAction.loadPizzasSuccess, function (state, _a) {
    var pizzas = _a.pizzas;
    var entities = pizzas.reduce(function (entities, pizza) {
        var _a;
        return __assign(__assign({}, entities), (_a = {}, _a[pizza.id] = pizza, _a));
    }, {});
    return __assign(__assign({}, state), { loaded: true, loading: false, entities: entities });
}), on(PizzaAction.loadPizzasFail, function (state) { return (__assign(__assign({}, state), { loading: false, loaded: false, data: [] })); }));
export function reducer(state, action) {
    return pizzaReducer(state, action);
}
export var getPizzasLoading = function (state) { return state.loading; };
export var getPizzasLoaded = function (state) { return state.loaded; };
export var getPizzasEntities = function (state) { return state.entities; };
//# sourceMappingURL=pizzas.reducer.js.map