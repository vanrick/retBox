app.controller('AllGamesController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
 $scope.view = {}
 GamesFactory.gamesAll()


 $scope.didSelectLanguage = function() {
  return $http.post('http://localhost:3000/games').success(function(data){
      console.log('allGamescontroller: ',data.rows);
      var nin =[]
      var sup =[]
      var sixty =[]
      console.log('nin: ',sup);
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
  console.log('addallGames: ', gId, gmId);
  GamesFactory.addGamesToTable(gId,gmId)
}
$scope.view.removeGamerGames = function(gId, gmId){
  console.log('removeallGames: ', gId, gmId);
  GamesFactory.removeGamesFromTable(gId,gmId)
}
var inventory = GamesFactory.inventory


})
