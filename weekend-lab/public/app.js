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

app.controller('SelfiesIndexCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.testing = "index";
}]);

app.controller('SignupCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
  $scope.scenario = 'Sign up';
  $rootScope.currentUser = Parse.User.current();
  
  $scope.signUp = function(form) {
    var user = new Parse.User();
    user.set("email", form.email);
    user.set("username", form.username);
    user.set("password", form.password);
    
    user.signUp(null, {
      success: function(user) {  
        $rootScope.currentUser = user;
        $location.path('/');
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });    
  };

  $rootScope.logOut = function(form) {
    Parse.User.logOut();
    $rootScope.currentUser = null;
    $location.path('/signup');
  };
}]);

app.controller('LoginCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
  $scope.testing = "login";
  $scope.logIn = function(form) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $rootScope.currentUser = user;
        $location.path('/');
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
}]);

app.controller('SelfiesShowCtrl', ['$scope', function ($scope) {
  $scope.testing = "show";
}]);


