var app = angular.module('soundCloudSearch', ['ngRoute', 'ngResource'] );
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/search.html',
      controller: 'SearchCtrl'
    })
    .when('/favorites', {
      templateUrl: 'templates/favorites.html',
      controller: 'FavoritesCtrl'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

app.factory('Track', ['$resource', function($resource) {
  return $resource('/api/tracks/:trackId', { trackId: '@_trackId'});
}]);

app.controller('SearchCtrl', ['$scope', '$http', 'Track', function($scope, $http, Track) {
  $scope.tracks = [];
  $scope.genreName = function() {
    var userSearch = $scope.searchGenre;
    SC.initialize({
      client_id: '74f88aa9448b885febbcd31db58eb150'
    });
    console.log(userSearch);
    
    var url = 'http://api.soundcloud.com/tracks.json?client_id=74f88aa9448b885febbcd31db58eb150&q=' + userSearch + '&limit=20';
    $http.get(url)
      .then(function(response) {
        $scope.userSearch = '';
        $scope.tracks = response.data;
        console.log($scope.tracks);
      },function(error) {
        console.log(error);
      });
  };
  $scope.play = function(track_url) {
    console.log(track_url);
  };

}]);

