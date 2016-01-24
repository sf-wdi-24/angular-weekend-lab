var app = angular.module('juntosApp', ['ngRoute']);

// Configuration

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'EventsCtrl'
    })
    .when('/events', {
      templateUrl: '/templates/events.html',
      controller: 'EventsCtrl'
    })
    .when('/mentors', {
      templateUrl: '/templates/mentors.html',
      controller: 'MentorsCtrl'
    })
    .when('/mentees', {
      templateUrl: '/templates/mentees.html',
      controller: 'MenteesCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

//Controllers 

app.controller('EventsCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.searchCtrlTest = 'search controller is working';
}]);

app.controller('MenteesCtrl', ['$scope', function ($scope) {
  $scope.favoritesCtrlTest = 'favorite controller is working';
}]); 

app.controller('MentorsCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.searchCtrlTest = 'search controller is working';
}]);




