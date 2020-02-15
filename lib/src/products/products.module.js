import { __decorate, __spreadArrays } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './store';
// components
import * as fromComponents from './components';
// containers
import * as fromContainers from './containers';
// services
import * as fromServices from './services';
// routes
export var ROUTES = [
    {
        path: '',
        component: fromContainers.ProductsComponent,
    },
    {
        path: ':pizzaId',
        component: fromContainers.ProductItemComponent,
    },
    {
        path: 'new',
        component: fromContainers.ProductItemComponent,
    },
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterModule.forChild(ROUTES),
                StoreModule.forFeature(fromStore.productsFeatureKey, fromStore.reducers),
                EffectsModule.forFeature(fromStore.effects)
            ],
            providers: __spreadArrays(fromServices.services),
            declarations: __spreadArrays(fromContainers.containers, fromComponents.components),
            exports: __spreadArrays(fromContainers.containers, fromComponents.components),
        })
    ], ProductsModule);
    return ProductsModule;
}());
export { ProductsModule };
//# sourceMappingURL=products.module.js.map