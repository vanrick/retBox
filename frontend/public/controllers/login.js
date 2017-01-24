app.controller('LoginController', function($scope, $http, $route, $routeParams, $window, GamesFactory, GamesService, $location) {
  $scope.view = {}

  // console.log('login controller: test1 ', GamesFactory.oneLogin);
  $scope.view.login = function(gt, gpw){
    GamesFactory.accLogin(gt, gpw).then(function(data){
      if ($scope.gt == null || $scope.gpw == null) {
        $scope.blank_gt = true
        $scope.pw_not_found = false
        $scope.not_found = false
      }else if(data == true){
        $location.path("/home");
      }else if(data == false){
        $scope.blank_gt = false
        $scope.pw_not_found = true
        $scope.not_found = false
      }else{
        $scope.not_found = true
      }
    })

  }

  $scope.view.oneLogin = function(input){
     GamesFactory.findOne(input)
  }


})
