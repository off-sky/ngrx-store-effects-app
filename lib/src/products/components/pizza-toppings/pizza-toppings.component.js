import { __decorate, __metadata, __spreadArrays } from "tslib";
import { Component, Input, forwardRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var PIZZA_TOPPINGS_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return PizzaToppingsComponent; }),
    multi: true,
};
var PizzaToppingsComponent = /** @class */ (function () {
    function PizzaToppingsComponent() {
        this.toppings = [];
        this.value = [];
    }
    PizzaToppingsComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    PizzaToppingsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    PizzaToppingsComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    PizzaToppingsComponent.prototype.selectTopping = function (topping) {
        if (this.existsInToppings(topping)) {
            this.value = this.value.filter(function (item) { return item.id !== topping.id; });
        }
        else {
            this.value = __spreadArrays(this.value, [topping]);
        }
        this.onTouch();
        this.onModelChange(this.value);
    };
    PizzaToppingsComponent.prototype.existsInToppings = function (topping) {
        return this.value.some(function (val) { return val.id === topping.id; });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PizzaToppingsComponent.prototype, "toppings", void 0);
    PizzaToppingsComponent = __decorate([
        Component({
            selector: 'pizza-toppings',
            providers: [PIZZA_TOPPINGS_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styleUrls: ['./pizza-toppings.component.scss'],
            template: "\n    <div class=\"pizza-toppings\">\n      <div \n        class=\"pizza-toppings-item\"\n        *ngFor=\"let topping of toppings;\"\n        (click)=\"selectTopping(topping)\"\n        [class.active]=\"existsInToppings(topping)\">\n        <img src=\"/assets/img/toppings/singles/{{ topping.name }}.svg\">\n        {{ topping.name }}\n      </div>\n    </div>\n  ",
        })
    ], PizzaToppingsComponent);
    return PizzaToppingsComponent;
}());
export { PizzaToppingsComponent };
//# sourceMappingURL=pizza-toppings.component.js.map