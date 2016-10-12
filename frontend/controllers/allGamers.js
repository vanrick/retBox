app.controller('AllGamersController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
$scope.view = {}
var loggedInUser = GamesFactory.getOneObj()
console.log('logged in user: ', loggedInUser.data.rows[0]);
  $scope.didSelectLanguage = function() {
    var single = []
    var all = []
   return $http.post('http://localhost:3000/gamers').success(function(data){
       console.log('indGamers: ', data.rows);
       for (var i = 0; i < data.rows.length; i++) {

         if (data.rows[i].gamer_tag == loggedInUser.data.rows[0].gamer_tag) {
           single.push(data.rows[i])
           console.log('logged in user',data.rows[i]);
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
   console.log('got em in IndGamersController: ', gmrId, gmId);
   GamesFactory.showAllComments(gmrId, gmId).then(function(data){
     $scope.view.currentGameId = gmId
     console.log(data);
     $scope.view.showAllComm = data.data.rows
     // $scope.view.showAllComm = {}
   })
 }

})
