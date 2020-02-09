import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCustom from './custom-serializer';

export interface State {
    router: fromRouter.RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
fromRouter.RouterReducerState<fromCustom.RouterStateUrl>
>('router');

export * from './custom-serializer';