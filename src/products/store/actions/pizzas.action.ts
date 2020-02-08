import { createAction, props } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';



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
    )
}



