var app = angular.module('foundInSFApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

app.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.homeTest = "Welcome to the homepage!";
}]);