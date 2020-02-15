import { createAction, props } from '@ngrx/store';
// load pizzas
export var LOAD_PIZZAS = '[Products] Load Pizzas';
export var LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export var LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';
// create pizza
export var CREATE_PIZZAS = '[Products] Create Pizzas';
export var CREATE_PIZZAS_FAIL = '[Products] Create Pizzas Fail';
export var CREATE_PIZZAS_SUCCESS = '[Products] Create Pizzas Success';
var PizzaAction = /** @class */ (function () {
    function PizzaAction() {
    }
    PizzaAction.loadPizzas = createAction(LOAD_PIZZAS);
    PizzaAction.loadPizzasFail = createAction(LOAD_PIZZAS_FAIL, props());
    PizzaAction.loadPizzasSuccess = createAction(LOAD_PIZZAS_SUCCESS, props());
    PizzaAction.createPizzas = createAction(CREATE_PIZZAS, props());
    PizzaAction.createPizzasFail = createAction(CREATE_PIZZAS_FAIL, props());
    PizzaAction.createPizzasSuccess = createAction(CREATE_PIZZAS_SUCCESS, props());
    return PizzaAction;
}());
export { PizzaAction };
//# sourceMappingURL=pizzas.action.js.map