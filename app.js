var app = angular.module('rescueTimeApp', ['ngRoute', 'ngResource']);
var category = 'nerdy';

app.service('sharedProperties', function () {
    return {
        getProperty: function () {
            return category;
        },
        setProperty: function(value) {
            category = value;
        }
    };
});

app.factory('RT', ['$http', function ($http) {
  var baseUrl = "http://api.icndb.com/jokes/random/15?limitTo=";
  return {
    query:function(category){
      return $http.get(baseUrl+"["+category+"]");
    }
  };
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/welcome.html',
      controller: 'WelcomeCtrl'
    })
    .when('/jokes', {
      templateUrl: 'templates/jokes.html',
      controller: 'JokesCtrl'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

app.controller('WelcomeCtrl', ['$scope', 'sharedProperties', 'RT', '$location', function ($scope, sharedProperties, RT, $location) {
  $scope.catSubmit = function() {
    sharedProperties.setProperty($scope.category);
    $location.path('/jokes');
  };
}]);

app.controller('JokesCtrl', ['$scope', 'sharedProperties', 'RT', function ($scope, sharedProperties, RT) {
  $scope.jokesResults = RT.query(sharedProperties.getProperty());
  $scope.category = sharedProperties.getProperty();
}]);