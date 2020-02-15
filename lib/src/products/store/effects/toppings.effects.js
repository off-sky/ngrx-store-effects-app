import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as toppingsActions from '../actions/toppings.action';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { ToppingsService } from '../../services/toppings.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
var ToppingsEffects = /** @class */ (function () {
    function ToppingsEffects(actions$, toppingService) {
        var _this = this;
        this.actions$ = actions$;
        this.toppingService = toppingService;
        this.loadToppings$ = createEffect(function () { return _this.actions$
            .pipe(ofType(toppingsActions.ToppingActions.loadToppings), switchMap(function () {
            return _this.toppingService.getToppings()
                .pipe(map(function (toppings) { return toppingsActions.ToppingActions.loadToppingsSuccess({ toppings: toppings }); }), catchError(function (error) { return of(toppingsActions.ToppingActions.loadToppingsFail({ error: error })); }));
        })); });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ToppingsEffects.prototype, "loadToppings$", void 0);
    ToppingsEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            ToppingsService])
    ], ToppingsEffects);
    return ToppingsEffects;
}());
export { ToppingsEffects };
//# sourceMappingURL=toppings.effects.js.map