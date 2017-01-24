app.controller('AllGamesController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
 $scope.view = {}
 GamesFactory.gamesAll()


 $scope.didSelectLanguage = function() {
  return $http.post('https://retbox.herokuapp.com/games').success(function(data){
      var nin =[]
      var sup =[]
      var sixty =[]
      for (var i = 0; i < data.rows.length; i++) {
        if (data.rows[i].console == 'NES') {
          nin.push(data.rows[i])
        }else if(data.rows[i].console  == 'SNES'){
          sup.push(data.rows[i])
        }else{
          sixty.push(data.rows[i])
        }
      }
     $scope.view.nes = nin
     $scope.view.snes = sup
     $scope.view.sixtyFour = sixty
      return data
    });
}
$scope.didSelectLanguage()

$scope.view.addGames=function(games){
  GamesFactory.addGames(games)
}

$scope.view.removeGames=function(games){
  GamesFactory.removeGames(games)
}
// do somein
var oneUseriD = GamesFactory.getOneObj()

$scope.view.userId = oneUseriD.data.rows[0].id
$scope.view.addGamerGames = function(gId, gmId){
  GamesFactory.addGamesToTable(gId,gmId)
}
$scope.view.removeGamerGames = function(gId, gmId){
  GamesFactory.removeGamesFromTable(gId,gmId)
}
var inventory = GamesFactory.inventory


})
