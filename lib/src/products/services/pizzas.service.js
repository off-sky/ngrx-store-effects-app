import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
var PizzasService = /** @class */ (function () {
    function PizzasService(http) {
        this.http = http;
    }
    PizzasService.prototype.getPizzas = function () {
        return this.http
            .get("/api/pizzas")
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    PizzasService.prototype.createPizza = function (payload) {
        return this.http
            .post("/api/pizzas", payload)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    PizzasService.prototype.updatePizza = function (payload) {
        return this.http
            .put("/api/pizzas/" + payload.id, payload)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    PizzasService.prototype.removePizza = function (payload) {
        return this.http
            .delete("/api/pizzas/" + payload.id)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    PizzasService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PizzasService);
    return PizzasService;
}());
export { PizzasService };
//# sourceMappingURL=pizzas.service.js.map