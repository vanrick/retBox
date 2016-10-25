app.controller('PlayController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
$scope.view={}

$scope.view.playIt = function(){
  console.log('PlayController HITT!!!');
 GamesFactory.playTime()
}

})
