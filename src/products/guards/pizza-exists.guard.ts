import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import * as fromStore from '../store';
import { Store } from "@ngrx/store";
import { tap, filter, take, map, switchMap, catchError } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class PizzaExistsGuard implements CanActivate {

    constructor(
        private store$: Store<fromStore.ProductState>
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkStore()
            .pipe(
                switchMap(() => {
                    const id = route.params.pizzaId;
                    return this.hasPizza(id);
                }),
                catchError(() => of(false))
            )
    }

    private hasPizza(id: number): Observable<boolean> {
        return this.store$.select(
            fromStore.getPizzaEntities
        )
        .pipe(
            map(entities => !!entities[id]),
            take(1)
        )
    }

    private checkStore(): Observable<boolean> {
        return this.store$.select(
            fromStore.getPizzasLoaded
        )
        .pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store$.dispatch(fromStore.PizzaAction.loadPizzas());
                }
            }),
            filter(loaded => !!loaded),
            take(1)
        )
    }

}