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
  $scope.searchGenre = function() {
    var genre = $scope.genre;
    var url = 'http://api.soundcloud.com/tracks.json?client_id=CLIENTKEY&q=parks&limit=50';
  }
}]);
