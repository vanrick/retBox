var app = angular.module("retBox", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/createAcc', {
        templateUrl: 'views/createAcc.html',
        controller: 'CreateAccController'
      })
      .when('/gamerz', {
        templateUrl: 'views/gamerz.html',
        controller: 'AllGamersController'
      })
      .when('/indGamerz', {
        templateUrl: 'views/individual_gamerz.html',
        controller: 'IndGamersController'
      })
      .when('/games', {
        templateUrl: 'views/allGames.html',
        controller: 'AllGamesController'
      })
      .when('/nav', {
        templateUrl: 'views/nav2.html',
        controller: 'NavController'
      })
      .when('/play', {
        templateUrl: 'views/playIt.html',
        controller: 'PlayController'
      })
      .otherwise('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      $locationProvider.html5Mode(true)
});
