import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] GO';
export const BACK = '[Router] BACK';
export const FORWARD = '[Router] Forward';

export class RouterActions {
    public static go = createAction(
        GO,
        props<{
            path: any[],
            query?: {},
            extras?: NavigationExtras
        }>()
    );

    public static back = createAction(
        BACK,
        props<{}>()
    );

    public static forward = createAction(
        FORWARD,
        props<{}>()
    );
}