var route = angular.module('route', ['ngRoute']);

route.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller : 'homeCtrl'
        })
        .when("/home", {
            templateUrl: "views/home.html",
            controller : 'homeCtrl'
        })
        .when("/product", {
            templateUrl: "views/product-info.html"
        })
        .otherwise({redirectTo :'/'});
});