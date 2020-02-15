import { createAction, props } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizzas';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizzas Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizzas Success';

// update pizza
export const UPDATE_PIZZA = '[Products] Update Pizzas';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizzas Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizzas Success';

//delete pizza
export const DELETE_PIZZA = '[Products] Delete Pizzas';
export const DELETE_PIZZA_FAIL = '[Products] Delete Pizzas Fail';
export const DELETE_PIZZA_SUCCESS = '[Products] Delete Pizzas Success';

export class PizzaAction {

    public static loadPizzas = createAction(
        LOAD_PIZZAS
    );
    
    public static loadPizzasFail = createAction(
        LOAD_PIZZAS_FAIL,
        props<{}>()
    );
    
    public static loadPizzasSuccess = createAction(
        LOAD_PIZZAS_SUCCESS,
        props<{ pizzas: Pizza[] }>()
    );

    public static createPizza = createAction(
        CREATE_PIZZA,
        props<{ pizza: Pizza }>()
    );
    
    public static createPizzaFail = createAction(
        CREATE_PIZZA_FAIL,
        props<{}>()
    );
    
    public static createPizzaSuccess = createAction(
        CREATE_PIZZA_SUCCESS,
        props<{ pizza: Pizza }>()
    );

    public static updatePizza = createAction(
        UPDATE_PIZZA,
        props<{ pizza: Pizza }>()
    );
    
    public static updatePizzaFail = createAction(
        UPDATE_PIZZA_FAIL,
        props<{}>()
    );
    
    public static updatePizzaSuccess = createAction(
        UPDATE_PIZZA_SUCCESS,
        props<{ pizza: Pizza }>()
    );

    public static deletePizza = createAction(
        DELETE_PIZZA,
        props<{ pizza: Pizza }>()
    );
    
    public static deletePizzaFail = createAction(
        DELETE_PIZZA_FAIL,
        props<{}>()
    );
    
    public static deletePizzaSuccess = createAction(
        DELETE_PIZZA_SUCCESS,
        props<{ pizza: Pizza }>()
    );
}



