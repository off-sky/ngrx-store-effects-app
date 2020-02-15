import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
var ToppingsService = /** @class */ (function () {
    function ToppingsService(http) {
        this.http = http;
    }
    ToppingsService.prototype.getToppings = function () {
        return this.http
            .get("/api/toppings")
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    ToppingsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ToppingsService);
    return ToppingsService;
}());
export { ToppingsService };
//# sourceMappingURL=toppings.service.js.map