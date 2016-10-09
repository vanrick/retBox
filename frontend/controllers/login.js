app.controller('LoginController', function($scope, $http, $route, $routeParams, $window, GamesFactory, GamesService, $location) {
  $scope.view = {}

  // console.log('login controller: test1 ', GamesFactory.oneLogin);
  $scope.view.login = function(gt, gpw){
    GamesFactory.accLogin(gt, gpw).then(function(data){
      console.log('login data: ',data );
      if ($scope.gt == null || $scope.gpw == null) {
        $scope.pw_not_found = false
        $scope.blank_gt = true
      }else if(data == true){
        console.log('true! login');
        $location.path("/home");
      }else if(data == false){
        $scope.blank_gt = false
        $scope.pw_not_found = true
      }else{
        $scope.not_found = true
       console.log('not found')
      }
    })

  }

  $scope.view.oneLogin = function(input){
     GamesFactory.findOne(input)
  }


})
