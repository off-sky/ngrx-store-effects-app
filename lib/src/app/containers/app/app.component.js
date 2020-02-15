import { __decorate } from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            styleUrls: ['./app.component.scss'],
            template: "\n  <div class=\"app\">\n    <div class=\"app__header\">\n      <img src=\"/assets/img/logo.svg\" class=\"app__logo\">\n    </div>\n    <div class=\"app__content\">\n      <div class=\"app__nav\">\n        <a routerLink=\"products\" routerLinkActive=\"active\">Products</a>\n      </div>\n      <div class=\"app__container\">\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"app__footer\">\n        <p>&copy; Ultimate Pizza Inc.</p>\n      </div>\n    </div>\n  </div>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map