app.controller('NavController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
 $scope.view = {}

 $scope.view.callAllG = function(){
   GamesFactory.gamesAll()
 }
})
