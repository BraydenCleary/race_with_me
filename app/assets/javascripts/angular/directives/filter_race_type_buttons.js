raceTogether.directive("filterRaceTypeButtons", ['$compile', function($compile){
  return{
    restrict: "A",
    link: function(scope, el, attr){
      var filterButtons = "";
      var capitalize = function(str){
        str = str == null ? '' : String(str);
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      _.each(scope.raceTypes, function(type){
        filterButtons += "<div ng-click='filter()' race-filter='" + type + "' class='" + type + " filter button'>" + capitalize(type) + "</div>"
      })
      el.append($compile(filterButtons)(scope));
    }
  }
}])
