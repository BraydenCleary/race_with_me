raceTogether.service('raceService', ['$http', function($http){
  this.fetchRaces = function(){
    return $http({
      url: "/races",
      method: 'GET'
    })
  }
}])
