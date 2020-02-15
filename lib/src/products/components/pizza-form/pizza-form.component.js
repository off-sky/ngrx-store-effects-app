import { __assign, __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { map } from 'rxjs/operators';
var PizzaFormComponent = /** @class */ (function () {
    function PizzaFormComponent(fb) {
        this.fb = fb;
        this.exists = false;
        this.selected = new EventEmitter();
        this.create = new EventEmitter();
        this.update = new EventEmitter();
        this.remove = new EventEmitter();
        this.form = this.fb.group({
            name: ['', Validators.required],
            toppings: [[]],
        });
    }
    Object.defineProperty(PizzaFormComponent.prototype, "nameControl", {
        get: function () {
            return this.form.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PizzaFormComponent.prototype, "nameControlInvalid", {
        get: function () {
            return this.nameControl.hasError('required') && this.nameControl.touched;
        },
        enumerable: true,
        configurable: true
    });
    PizzaFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.pizza && this.pizza.id) {
            this.exists = true;
            this.form.patchValue(this.pizza);
        }
        this.form
            .get('toppings')
            .valueChanges.pipe(map(function (toppings) { return toppings.map(function (topping) { return topping.id; }); }))
            .subscribe(function (value) { return _this.selected.emit(value); });
    };
    PizzaFormComponent.prototype.createPizza = function (form) {
        var value = form.value, valid = form.valid;
        if (valid) {
            this.create.emit(value);
        }
    };
    PizzaFormComponent.prototype.updatePizza = function (form) {
        var value = form.value, valid = form.valid, touched = form.touched;
        if (touched && valid) {
            this.update.emit(__assign(__assign({}, this.pizza), value));
        }
    };
    PizzaFormComponent.prototype.removePizza = function (form) {
        var value = form.value;
        this.remove.emit(__assign(__assign({}, this.pizza), value));
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PizzaFormComponent.prototype, "pizza", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PizzaFormComponent.prototype, "toppings", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PizzaFormComponent.prototype, "selected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PizzaFormComponent.prototype, "create", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PizzaFormComponent.prototype, "update", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PizzaFormComponent.prototype, "remove", void 0);
    PizzaFormComponent = __decorate([
        Component({
            selector: 'pizza-form',
            styleUrls: ['./pizza-form.component.scss'],
            template: "\n    <div class=\"pizza-form\">\n      <form [formGroup]=\"form\">\n      \n        <label>\n          <h4>Pizza name</h4>\n          <input \n            type=\"text\" \n            formControlName=\"name\"\n            placeholder=\"e.g. Pepperoni\"\n            class=\"pizza-form__input\"\n            [class.error]=\"nameControlInvalid\">\n          <div\n            class=\"pizza-form__error\"\n            *ngIf=\"nameControlInvalid\">\n            <p>Pizza must have a name</p>\n          </div>\n        </label>\n      \n        <ng-content></ng-content>\n\n        <label>\n          <h4>Select toppings</h4>\n        </label>\n        <div class=\"pizza-form__list\">\n\n          <pizza-toppings\n            [toppings]=\"toppings\"\n            formControlName=\"toppings\">\n          </pizza-toppings>\n\n        </div>\n\n        <div class=\"pizza-form__actions\">\n          <button\n            type=\"button\"\n            class=\"btn btn__ok\"\n            *ngIf=\"!exists\"\n            (click)=\"createPizza(form)\">\n            Create Pizza\n          </button>\n\n          <button\n            type=\"button\"\n            class=\"btn btn__ok\"\n            *ngIf=\"exists\"\n            (click)=\"updatePizza(form)\">\n            Save changes\n          </button>\n\n          <button\n            type=\"button\"\n            class=\"btn btn__warning\"\n            *ngIf=\"exists\"\n            (click)=\"removePizza(form)\">\n            Delete Pizza\n          </button>\n        </div>\n\n      </form>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], PizzaFormComponent);
    return PizzaFormComponent;
}());
export { PizzaFormComponent };
//# sourceMappingURL=pizza-form.component.js.map