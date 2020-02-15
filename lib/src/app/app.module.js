import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomRouteSerializer } from './store';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
// this would be done dynamically with webpack for builds
var environment = {
    development: true,
    production: false,
};
export var metaReducers = !environment.production
    ? [storeFreeze]
    : [];
// bootstrap
import { AppComponent } from './containers/app/app.component';
// routes
export var ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    {
        path: 'products',
        loadChildren: '../products/products.module#ProductsModule',
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                RouterModule.forRoot(ROUTES),
                StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
                StoreRouterConnectingModule.forRoot({
                    serializer: CustomRouteSerializer
                }),
                EffectsModule.forRoot([]),
                environment.development ? StoreDevtoolsModule.instrument() : [],
            ],
            declarations: [AppComponent],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map