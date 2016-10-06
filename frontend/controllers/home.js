app.controller('HomeController', function($scope, $http, $route, $routeParams, GamesFactory) {
$scope.view = {}

console.log('home controller: ',GamesFactory.oneLogin);
GamesFactory.oneLogin
})
