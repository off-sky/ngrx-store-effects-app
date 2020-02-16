import * as fromStore from '../store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap, filter, take, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ToppingsGuard implements CanActivate {

    constructor(
        private store$: Store<fromStore.ProductState>
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkStore()
            .pipe(
                catchError(() => of(false))
            );
    }


    private checkStore(): Observable<boolean> {
        return this.store$.select(
            fromStore.getToppingsLoaded
        )
        .pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store$.dispatch(fromStore.ToppingActions.loadToppings());
                }
            }),
            filter(loaded => !!loaded),
            take(1)
        )
    }

}