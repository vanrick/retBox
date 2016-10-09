app.controller('HomeController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
$scope.view = {}
var json = GamesFactory.getOneObj()
$scope.view.gn = json.data.rows[0].gamer_tag
$scope.view.gi = json.data.rows[0].gamer_icon
$scope.view.gq = json.data.rows[0].gamer_quote
$scope.view.gId = json.data.rows[0].id
// $scope.view.sug = ''
var happy = json.data.rows[0].id

$scope.view.deleteAcc = function(userId){
  GamesFactory.deleteAcc(userId)
}
//ajax call
$scope.view.getGames = function(happy){
  GamesFactory.allGamesForUser(happy).then(function(data){
   var merge = [].concat.apply([], data.data);
   console.log('home: ',merge);
   $scope.sug = merge
  })
}
$scope.view.getGames(happy)


})
