var app = angular.module("personal-site", ['ngRoute']);


app.config(function($routeProvider, $locationProvider, $routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      // .when('/checkout', {
      //   templateUrl: 'views/checkout.html',
      //   controller: 'HomeController'
      // })
      .otherwise('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      $locationProvider.html5Mode(true)
});
