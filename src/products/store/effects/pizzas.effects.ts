import { Injectable} from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as fromPizzaActions from '../actions/pizzas.action';
import * as fromRoot from '../../../app/store';
import { switchMap, catchError, map } from 'rxjs/operators';
import { PizzasService } from '../../services';
import { of } from 'rxjs';


@Injectable()
export class PizzaEffects {

    constructor(
        private actions$: Actions,
        private pizzasService: PizzasService
    ) {
    }

    public loadPizzas$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(fromPizzaActions.PizzaAction.loadPizzas),
                switchMap(() => {
                    return this.pizzasService.getPizzas()
                        .pipe(
                            map(pizzas => fromPizzaActions.PizzaAction.loadPizzasSuccess({ pizzas })),
                            catchError(err => of(fromPizzaActions.PizzaAction.loadPizzasFail({ err })))
                        )
                })
            )
    );

    public createPizzas$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(fromPizzaActions.PizzaAction.createPizza),
                map(action => action.pizza),
                switchMap((pizza) => {
                    return this.pizzasService.createPizza(pizza)
                        .pipe(
                            map(created => fromPizzaActions.PizzaAction.createPizzaSuccess({ pizza: created })),
                            catchError(err => of(fromPizzaActions.PizzaAction.createPizzaFail({ err })))
                        )
                })
            )
    );


    public createPizzaSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromPizzaActions.PizzaAction.createPizzaSuccess),
            map(({ pizza }) => pizza.id),
            map(pizzaId => fromRoot.RouterActions.go({ path: [ 'products', pizzaId ]}))
        )
    );

    public updatePizzas$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(fromPizzaActions.PizzaAction.updatePizza),
                map(action => action.pizza),
                switchMap((pizza) => {
                    return this.pizzasService.updatePizza(pizza)
                        .pipe(
                            map(updated => fromPizzaActions.PizzaAction.updatePizzaSuccess({ pizza: updated })),
                            catchError(err => of(fromPizzaActions.PizzaAction.updatePizzaFail({ err })))
                        )
                })
            )
    );

    public deletePizzas$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(fromPizzaActions.PizzaAction.deletePizza),
                map(action => action.pizza),
                switchMap((pizza) => {
                    return this.pizzasService.removePizza(pizza)
                        .pipe(
                            map(deleted => fromPizzaActions.PizzaAction.deletePizzaSuccess({ pizza })),
                            catchError(err => of(fromPizzaActions.PizzaAction.deletePizzaFail({ err })))
                        )
                })
            )
    );

    public handlePizzaSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(
                fromPizzaActions.PizzaAction.updatePizzaSuccess,
                fromPizzaActions.PizzaAction.deletePizzaSuccess
            ),
            map(()=> fromRoot.RouterActions.go({ path: [ 'products' ]}))
        )
    );
}