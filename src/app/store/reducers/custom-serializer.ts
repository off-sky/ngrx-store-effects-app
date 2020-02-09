import * as fromRouter from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
  }

export class CustomRouteSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {

    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url, root: { queryParams } } = routerState;
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { params } = route;
        return { url, queryParams, params };
    }

}