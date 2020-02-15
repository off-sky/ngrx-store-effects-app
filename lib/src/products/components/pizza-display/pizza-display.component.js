import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
export var DROP_ANIMATION = trigger('drop', [
    transition(':enter', [
        style({ transform: 'translateY(-200px)', opacity: 0 }),
        animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(0)', opacity: 1 })),
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(-200px)', opacity: 0 })),
    ]),
]);
var PizzaDisplayComponent = /** @class */ (function () {
    function PizzaDisplayComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PizzaDisplayComponent.prototype, "pizza", void 0);
    PizzaDisplayComponent = __decorate([
        Component({
            selector: 'pizza-display',
            animations: [DROP_ANIMATION],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styleUrls: ['./pizza-display.component.scss'],
            template: "\n    <div class=\"pizza-display\">\n      <div class=\"pizza-display__base\">\n        <img src=\"/assets/img/pizza.svg\">\n        <img \n          *ngFor=\"let topping of pizza?.toppings; index as i;\"\n          src=\"/assets/img/toppings/{{ topping.name }}.svg\" \n          [style.zIndex]=\"i\"\n          class=\"pizza-display__topping\"\n          @drop>\n      </div>\n    </div>\n  ",
        })
    ], PizzaDisplayComponent);
    return PizzaDisplayComponent;
}());
export { PizzaDisplayComponent };
//# sourceMappingURL=pizza-display.component.js.map