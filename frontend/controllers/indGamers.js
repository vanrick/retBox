app.controller('IndGamersController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
$scope.view = {}
var happy1 = GamesFactory.singlePost
$scope.view.gt = happy1[0].gamer_tag
var happy = happy1[0].id
console.log('happy: ',happy);
$scope.view.getGames = function(happy){
  GamesFactory.allGamesForUser(happy).then(function(data){
   var merge = [].concat.apply([], data.data);
   console.log('home: ',merge);
   $scope.sug = merge
  })
}
$scope.view.getGames(happy)

$scope.view.getRtgs = function(happy){
  GamesFactory.defaultRtg(happy).then(function(data){
    console.log('defaultRtg in indGamers: ',data.data.rows);
    $scope.rtgs = data.data.rows
    var obj = data.data.rows
    obj.forEach(function(entry){
      console.log('entry: ',entry);

    })
  })
}
$scope.view.getRtgs(happy)

})
