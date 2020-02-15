import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
export var reducers = {
    router: fromRouter.routerReducer
};
export var getRouterState = createFeatureSelector('router');
export * from './custom-serializer';
//# sourceMappingURL=index.js.map