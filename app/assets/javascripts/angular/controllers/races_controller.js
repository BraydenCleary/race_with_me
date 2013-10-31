raceTogether.controller("racesController", ["$scope", "raceService", function($scope, raceService){

  raceService.fetchRaces().then(function(response){
    $scope.races = response.data.races;
  })

}]);
