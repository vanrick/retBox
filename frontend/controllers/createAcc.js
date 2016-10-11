app.controller('CreateAccController', function($scope, $http, $route, $routeParams, $location, GamesFactory, GamesService) {
  $scope.view = {}
  $scope.view.gameIcons = GamesFactory.gamer_icons
  $scope.isSelected = function(selected){
    // console.log('something');
    return $scope.selected == selected
    console.log($scope.isSelected);
  }

  $scope.view.showMe = function(input){
    $scope.view.picSelected= ''
    $scope.view.picSelected=input

  }
  $scope.view.getJson = function(gt, gpw, gi, gq){
    GamesFactory.createAcc(gt, gpw, gi, gq).then(function(value){
      console.log('if existed ',value)
      if (value == false) {
        $scope.existed = true
      }else{
        $location.path("/login");
        $scope.existed = false
      }
    })

  }

  // console.log('json: ',$scope.view.getJson);
})
