raceTogether.controller("racesController", ["$scope", "raceService", function($scope, raceService){
  $scope.raceTypes = ["all", "running", "biking", "triathlon"]

  raceService.fetchRaces().then(function(response){
    $scope.races = response.data.races;
    $scope.allRaces = response.data.races;
  })
}]);
