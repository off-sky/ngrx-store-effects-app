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
        (state) => ({ ...state, loading: false, loaded: false })
    ),
    on(
        PizzaAction.createPizzaSuccess,
        (state, action) => {
            const added = action.pizza;
            const entities = {
                ...state.entities,
                [added.id]: added
            };
            return {
                ...state,
                entities
            };
        }
    ),
    on(
        PizzaAction.updatePizzaSuccess,
        (state, action) => {
            const updated = action.pizza;
            const entities = {
                ...state.entities,
                [updated.id]: updated
            };
            return {
                ...state,
                entities
            };
        }
    ),
    on(
        PizzaAction.deletePizzaSuccess,
        (state, action) => {
            const removed = action.pizza;
            const { [removed.id]: pizza, ...entities } = state.entities;
            return {
                ...state,
                entities
            };
        }
    )
)


export function reducer(state: PizzaState, action: Action): PizzaState {
    return pizzaReducer(state, action);
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;

