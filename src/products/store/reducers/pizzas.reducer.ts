import { Pizza } from 'src/products/models/pizza.model';
import { Action, createReducer, on } from '@ngrx/store';
import { PizzaAction } from '../actions/pizzas.action';

export interface PizzaState {
    entities: { [id: number]: Pizza};
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    entities: {},
    loaded: false,
    loading: false
}


export const pizzaReducer = createReducer(
    initialState,
    on(
        PizzaAction.loadPizzas,
        (state) => ({ ...state, loaded: false, loading: true })
    ),
    on(
        PizzaAction.loadPizzasSuccess,
        (state, { pizzas }) => {
          const entities = pizzas.reduce((entities: { [id: number]: Pizza}, pizza) => {
            return {
              ...entities,
              [pizza.id]: pizza
            }
          }, {});
          return {...state, loaded: true, loading: false, entities }
        }
    ),
    on(
        PizzaAction.loadPizzasFail,
        (state) => ({ ...state, loading: false, loaded: false, data: []})
    )
)


export function reducer(state: PizzaState, action: Action): PizzaState {
    return pizzaReducer(state, action);
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;

