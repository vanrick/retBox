app.controller('LoginController', function($scope, $http, $route, $routeParams, $window, GamesFactory) {
  $scope.view = {}

  $scope.view.login = function(gt, gpw){
    GamesFactory.accLogin(gt, gpw).then(function(data){
      console.log('login data: ',data );
      if ($scope.gt == null || $scope.gpw == null) {
        $scope.pw_not_found = false
        $scope.blank_gt = true
      }else if(data == true){
        GamesFactory.oneLogin.push(data)
        console.log('true! login');
        $window.location.href = '/home';
      }else if(data == false){
        $scope.blank_gt = false
        $scope.pw_not_found = true
      }else{
        $scope.not_found = true
        'not found'
      }
    })
  }

  $scope.view.findOnes = function(input){
    GamesFactory.findOne(input)
  }


})
