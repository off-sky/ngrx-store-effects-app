import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(store) {
        this.store = store;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.pizzas$ = this.store.select(fromStore.getAllPizzas);
        this.store.dispatch(fromStore.PizzaAction.loadPizzas());
        this.store.dispatch(fromStore.ToppingActions.loadToppings());
    };
    ProductsComponent = __decorate([
        Component({
            selector: 'products',
            styleUrls: ['./products.component.scss'],
            template: "\n    <div class=\"products\">\n      <div class=\"products__new\">\n        <a\n          class=\"btn btn__ok\" \n          routerLink=\"./new\">\n          New Pizza\n        </a>\n      </div>\n      <div class=\"products__list\">\n        <div *ngIf=\"!((pizzas$ | async)?.length)\">\n          No pizzas, add one to get started.\n        </div>\n        <pizza-item\n          *ngFor=\"let pizza of pizzas$ | async\"\n          [pizza]=\"pizza\">\n        </pizza-item>\n      </div>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [Store])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map