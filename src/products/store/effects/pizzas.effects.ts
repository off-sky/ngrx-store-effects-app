import { Injectable} from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as fromPizzaActions from '../actions/pizzas.action';
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

    @Effect()
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
    )
}