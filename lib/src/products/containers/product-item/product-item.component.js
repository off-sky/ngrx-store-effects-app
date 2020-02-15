import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { take } from 'rxjs/operators';
var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent(store) {
        this.store = store;
    }
    ProductItemComponent.prototype.ngOnInit = function () {
        this.pizza$ = this.store.select(fromStore.getSelectedPizza);
        this.toppings$ = this.store.select(fromStore.getAllToppings);
        this.visualise$ = this.store.select(fromStore.getPizzaVisualised);
        this.visualiseInitialToppings();
    };
    ProductItemComponent.prototype.onSelect = function (event) {
        this.store.dispatch(fromStore.ToppingActions.visualiseToppings({ toppings: event }));
    };
    ProductItemComponent.prototype.onCreate = function (event) {
        thi;
    };
    ProductItemComponent.prototype.onUpdate = function (event) {
    };
    ProductItemComponent.prototype.onRemove = function (event) {
    };
    ProductItemComponent.prototype.visualiseInitialToppings = function () {
        var _this = this;
        this.pizza$
            .pipe(take(1))
            .subscribe(function (pizza) {
            var pizzaExists = !!(pizza && pizza.toppings);
            var toppings = pizzaExists ? pizza.toppings.map(function (topping) { return topping.id; }) : [];
            _this.store.dispatch(fromStore.ToppingActions.visualiseToppings({ toppings: toppings }));
        });
    };
    ProductItemComponent = __decorate([
        Component({
            selector: 'product-item',
            styleUrls: ['./product-item.component.scss'],
            template: "\n    <div \n      class=\"product-item\">\n      <pizza-form\n        [pizza]=\"pizza$ | async\"\n        [toppings]=\"toppings$ | async\"\n        (selected)=\"onSelect($event)\"\n        (create)=\"onCreate($event)\"\n        (update)=\"onUpdate($event)\"\n        (remove)=\"onRemove($event)\">\n        <pizza-display\n          [pizza]=\"visualise$ | async\">\n        </pizza-display>\n      </pizza-form>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [Store])
    ], ProductItemComponent);
    return ProductItemComponent;
}());
export { ProductItemComponent };
//# sourceMappingURL=product-item.component.js.map