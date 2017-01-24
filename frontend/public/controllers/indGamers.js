app.controller('IndGamersController', function($scope, $timeout, $http, $route, $routeParams, GamesFactory, GamesService) {
$scope.view = {}
$scope.view.currentGameId = 0
var happy1 = GamesFactory.singlePost
$scope.view.gt = happy1[0].gamer_tag
var happy = happy1[0].id
$scope.view.gmrId = happy1[0].id

// console.log('happy: ',happy);
$scope.view.getGames = function(happy){
  GamesFactory.allGamesForUser(happy).then(function(data){
   var merge = [].concat.apply([], data.data);
  //  console.log('home: ',merge);
   $scope.sug = merge
  })
}
$scope.view.getGames(happy)

$scope.view.getRtgs = function(happy){
  GamesFactory.defaultRtg(happy).then(function(data){
    // console.log('defaultRtg in indGamers: ',data.data.rows);
    $scope.rtgs = data.data.rows
    var obj = data.data.rows
    obj.forEach(function(entry){
      // console.log('entry: ',entry);

    })
  })
}
$scope.view.getRtgs(happy)

$scope.view.vote=GamesFactory.votes
$scope.up = function(post){
  post.votes++
}
$scope.down = function(post){
  post.votes--
}
$scope.view.showAllComments = function(gmrId, gmId){
  GamesFactory.showAllComments(gmrId, gmId).then(function(data){
    $scope.view.currentGameId = gmId
    // console.log(data);
    $scope.view.showAllComm = data.data.rows
    // $scope.view.showAllComm = {}
  })
}
$scope.view.addComments = function(gmrId, gmId, comments){
  // console.log('comments added IndGamersController2: ', gmrId, gmId);
  GamesFactory.addComments(gmrId, gmId, comments)
  $scope.comments = ''
}
$scope.view.setTime = function(gmrId, gmId){
  $timeout($scope.view.showAllComments(gmrId, gmId),2000)
}

$scope.date = new Date();

var pic = GamesFactory.getOneObj()
// console.log('pic: ',pic);
$scope.view.gi = pic.data.rows[0].gamer_icon
})
