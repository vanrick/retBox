app.controller('AllGamersController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
$scope.view = {}
var loggedInUser = GamesFactory.getOneObj()
  $scope.didSelectLanguage = function() {
    var single = []
    var all = []
   return $http.post('https://retbox.herokuapp.com/gamers').success(function(data){
       for (var i = 0; i < data.rows.length; i++) {

         if (data.rows[i].gamer_tag == loggedInUser.data.rows[0].gamer_tag) {
           single.push(data.rows[i])
         }else{
            all.push(data.rows[i])
         }
       }
       $scope.view.allGamers = all
       return all
     });
  }

  $scope.didSelectLanguage()
 $scope.view.single = function(post){
    GamesFactory.addIndGamers(post)
 }

 $scope.view.showAllComments = function(gmrId, gmId){
   GamesFactory.showAllComments(gmrId, gmId).then(function(data){
     $scope.view.currentGameId = gmId
     $scope.view.showAllComm = data.data.rows
     // $scope.view.showAllComm = {}
   })
 }

})
