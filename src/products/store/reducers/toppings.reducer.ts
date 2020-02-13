import * as fromActions from '../actions/toppings.action';
import { Topping } from 'src/products/models/topping.model';
import { createReducer, Action, on } from '@ngrx/store';


export interface ToppingState{
    entities: {
        [id: number]: Topping
    };
    loaded: boolean;
    loading: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingState = {
    loaded: false,
    loading: false,
    entities: {},
    selectedToppings: []
}

const toppingReducer = createReducer(
    initialState,
    on(fromActions.ToppingActions.loadToppings, state => ({...state, loading: true})),
    on(fromActions.ToppingActions.loadToppingsFail, state => ({...state, loading: false, loaded: false})),
    on(fromActions.ToppingActions.loadToppingsSuccess, (state, action: { toppings: Topping[]}) => {
        const toppingEntities = action.toppings.reduce((entities, topping) => {
            return {...entities, [topping.id]: topping };
        }, {});
        return {
            ...state,
            loaded: true,
            loading: false,
            entities: toppingEntities
        }
    }),
    on(fromActions.ToppingActions.visualiseToppings, (state, action: { toppings: number[]}) => {
        return {
            ...state,
            selectedToppings: action.toppings
        }
    })
);

export function reducer(state: ToppingState, action: Action) {
    return toppingReducer(state, action)
}

export const getToppingsEntities = (state: ToppingState) => state.entities;
export const getToppingsLoading = (state: ToppingState) => state.loading;
export const getToppingsLoaded = (state: ToppingState) => state.loaded;
export const getSelectedToppings = (state: ToppingState) => state.selectedToppings;