var CustomRouteSerializer = /** @class */ (function () {
    function CustomRouteSerializer() {
    }
    CustomRouteSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var params = route.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomRouteSerializer;
}());
export { CustomRouteSerializer };
//# sourceMappingURL=custom-serializer.js.map