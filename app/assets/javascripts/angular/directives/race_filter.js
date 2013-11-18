raceTogether.directive("raceFilter", [function(){
  return{
    restrict: "A",
    link: function($scope, el, attrs){
      el.bind('click', function(){
        var raceFilter = $(this).attr('race-filter');
        changeActiveButton();
        if (raceFilter == 'all'){
          $scope.races = $scope.allRaces;
        } else {
          filterRaces(raceFilter);
        }
        $scope.$apply();
      })

      filterRaces = function(raceFilter){
        $scope.races = _.filter($scope.allRaces, function(race){
          return race.race_type == raceFilter;
        })
      }

      changeActiveButton = function(){
        $('.filter').removeClass('active');
        $(this).addClass('active');
      }
    }
  }
}])
