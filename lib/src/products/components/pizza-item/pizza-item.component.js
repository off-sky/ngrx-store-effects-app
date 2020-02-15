import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
var PizzaItemComponent = /** @class */ (function () {
    function PizzaItemComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PizzaItemComponent.prototype, "pizza", void 0);
    PizzaItemComponent = __decorate([
        Component({
            selector: 'pizza-item',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styleUrls: ['./pizza-item.component.scss'],
            template: "\n    <div class=\"pizza-item\">\n      <a [routerLink]=\"['/products', pizza.id]\">\n        <pizza-display\n          [pizza]=\"pizza\">\n        </pizza-display>\n        <h4>{{ pizza.name }}</h4>\n        <button type=\"button\" class=\"btn btn__ok\">\n          View Pizza\n        </button>\n      </a>\n    </div>\n  ",
        })
    ], PizzaItemComponent);
    return PizzaItemComponent;
}());
export { PizzaItemComponent };
//# sourceMappingURL=pizza-item.component.js.map