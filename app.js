var app = angular.module('juntosApp', ['ngRoute', 'ngResource', 'firebase']);

// Configuration

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'MainCtrl'
    })
    .when('/events', {
      templateUrl: 'templates/events.html',
      controller: 'EventsCtrl'
    })
    .when('/mentors', {
      templateUrl: 'templates/mentors.html',
      controller: 'MentorsCtrl'
    })
    .when('/mentees', {
      templateUrl: 'templates/mentees.html',
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

// app.controller('MainCtrl', ['$scope', '$http', function ($scope, $location, $http, angularFire ) {
//   var url = "https://juntos.firebaseapp.com/"; 
//   angularFire(url, $scope, "juntos"); 
// }]);

app.controller('EventsCtrl', ['$scope', '$http', function ($scope, $location, $http, angularFire ) {
  var url = "https://juntos.firebaseapp.com/"; 
  angularFire(url, $scope, "events").then(function(){ 

  var events = $scope.events; 

  $scope.newEvent = ''; 
  $scope.editedEvent = null; 
}); 
}]);

app.controller('MenteesCtrl', ['$scope', function ($scope, $location, $http, angularFire ) {
  var url = "https://juntos.firebaseapp.com/"; 
  angularFire(url, $scope, "mentees").then(function(){ 

  var events = $scope.events; 

  $scope.newMentee = ''; 
  $scope.editedMentee = null; 
});
}]); 

app.controller('MentorsCtrl', ['$scope', '$http', function ($scope, $location, $http, angularFire ) {
  var url = "https://juntos.firebaseapp.com/"; 
  angularFire(url, $scope, "mentors").then(function(){ 

  var mentors = $scope.mentors; 

  $scope.newMentor = ''; 
  $scope.editedMentor = null; 
});
}]);




