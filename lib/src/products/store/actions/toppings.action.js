import { createAction, props } from '@ngrx/store';
export var LOAD_TOPPINGS = '[Products] Load Toppings';
export var LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export var LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export var VISUALISE_TOPPINGS = '[Products] Visualise Toppings';
var ToppingActions = /** @class */ (function () {
    function ToppingActions() {
    }
    ToppingActions.loadToppings = createAction(LOAD_TOPPINGS);
    ToppingActions.loadToppingsFail = createAction(LOAD_TOPPINGS_FAIL, props());
    ToppingActions.loadToppingsSuccess = createAction(LOAD_TOPPINGS_SUCCESS, props());
    ToppingActions.visualiseToppings = createAction(VISUALISE_TOPPINGS, props());
    return ToppingActions;
}());
export { ToppingActions };
//# sourceMappingURL=toppings.action.js.map