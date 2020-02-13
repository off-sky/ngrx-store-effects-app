import { Injectable } from '@angular/core';
import * as toppingsActions from '../actions/toppings.action';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { ToppingsService } from '../../services/toppings.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ToppingsEffects {

    constructor(
        private actions$: Actions,
        private toppingService: ToppingsService
    ) {}


    @Effect()
    loadToppings$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(toppingsActions.ToppingActions.loadToppings),
                switchMap(() => {
                    return this.toppingService.getToppings()
                        .pipe(
                            map(toppings => toppingsActions.ToppingActions.loadToppingsSuccess({ toppings })),
                            catchError(error => of(toppingsActions.ToppingActions.loadToppingsFail({ error })))
                        )
                })
            )
    )

}