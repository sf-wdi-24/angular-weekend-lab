Parse.initialize("Dq1BPYiJrrzEFRky4HVeldBCJH1hPECni1TGiNyp", "YRIVVcA5YxqGrrl3rF6PniDcYwvD6RzgG34h8VPS");

var app = angular.module('selfieApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/selfies/index.html',
      controller: 'SelfiesIndexCtrl'
    })
    .when('/login', {
      templateUrl: 'templates/selfies/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'templates/selfies/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/selfies/:id', {
      templateUrl: 'templates/selfies/show.html',
      controller: 'SelfiesShowCtrl'
    });
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

app.controller('SelfiesIndexCtrl', ['$scope', function ($scope) {
  $scope.testing = "index";
}]);

app.controller('SignupCtrl', ['$scope', function ($scope) {
  $scope.testing = "signup";
}]);

app.controller('LoginCtrl', ['$scope', function ($scope) {
  $scope.testing = "login";
}]);

app.controller('SelfiesShowCtrl', ['$scope', function ($scope) {
  $scope.testing = "show";
}]);


