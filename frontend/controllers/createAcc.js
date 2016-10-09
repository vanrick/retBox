app.controller('CreateAccController', function($scope, $http, $route, $routeParams, GamesFactory, GamesService) {
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
      console.log(GamesFactory.accExisted)
      if (value == false) {
        $scope.existed = true
      }else{
        $scope.existed = false
      }
    })

  }

  // console.log('json: ',$scope.view.getJson);
})
