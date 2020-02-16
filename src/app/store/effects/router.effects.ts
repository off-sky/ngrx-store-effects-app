import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterActions } from '../actions';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RouterEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) {}

    public navigate$ = createEffect(
        () => this.actions$.pipe(
            ofType(RouterActions.go),
            tap(({path, query: queryParams, extras })=> {
                this.router.navigate(path, { queryParams, ...extras });
            })
        ),
        { dispatch: false }
    );

    public navigateBack$ = createEffect(
        () => this.actions$.pipe(
            ofType(RouterActions.back),
            tap(()=> this.location.back())
        ),
        { dispatch: false }
    );

    public navigateForward$ = createEffect(
        () => this.actions$.pipe(
            ofType(RouterActions.back),
            tap(()=> this.location.forward())
        ),
        { dispatch: false }
    );
}