import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as fromPizzaActions from '../actions/pizzas.action';
import { switchMap, catchError, map } from 'rxjs/operators';
import { PizzasService } from '../../services';
import { of } from 'rxjs';
var PizzaEffects = /** @class */ (function () {
    function PizzaEffects(actions$, pizzasService) {
        var _this = this;
        this.actions$ = actions$;
        this.pizzasService = pizzasService;
        this.loadPizzas$ = createEffect(function () { return _this.actions$
            .pipe(ofType(fromPizzaActions.PizzaAction.loadPizzas), switchMap(function () {
            return _this.pizzasService.getPizzas()
                .pipe(map(function (pizzas) { return fromPizzaActions.PizzaAction.loadPizzasSuccess({ pizzas: pizzas }); }), catchError(function (err) { return of(fromPizzaActions.PizzaAction.loadPizzasFail({ err: err })); }));
        })); });
    }
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], PizzaEffects.prototype, "loadPizzas$", void 0);
    PizzaEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            PizzasService])
    ], PizzaEffects);
    return PizzaEffects;
}());
export { PizzaEffects };
//# sourceMappingURL=pizzas.effects.js.map