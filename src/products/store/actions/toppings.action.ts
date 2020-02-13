import { Topping } from '../../models/topping.model';
import { createAction, props } from '@ngrx/store';


export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';

export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';

export class ToppingActions {

    public static loadToppings = createAction(
        LOAD_TOPPINGS
    );

    public static loadToppingsFail = createAction(
        LOAD_TOPPINGS_FAIL,
        props<{}>()
    );

    public static loadToppingsSuccess = createAction(
        LOAD_TOPPINGS_SUCCESS,
        props<{ toppings: Topping[] }>()
    );

    public static visualiseToppings = createAction(
        VISUALISE_TOPPINGS,
        props<{ toppings: number[] }>()
    );

}