Parse.initialize("Dq1BPYiJrrzEFRky4HVeldBCJH1hPECni1TGiNyp", "YRIVVcA5YxqGrrl3rF6PniDcYwvD6RzgG34h8VPS");

var parseRequestHeaders = {
  'X-Parse-Application-Id': 'Dq1BPYiJrrzEFRky4HVeldBCJH1hPECni1TGiNyp',
  'X-Parse-REST-API-Key': 'sR0yiSRXpQZfy70TM3816kzvfpAM0a004Ugm6xiJ'
};

var app = angular.module('selfieApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/photos/index.html',
      controller: 'PhotosIndexCtrl'
    })
    .when('/login', {
      templateUrl: 'templates/photos/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'templates/photos/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/profile', {
      templateUrl: 'templates/photos/profile.html',
      controller: 'ProfileCtrl'
    });
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

app.factory('Photo', ['$resource', function ($resource) {
  return $resource('https://api.parse.com/1/classes/Photo/:photoId', { photoId: '@photoId' },
    {
      query: {
        method: 'GET',
        isArray: false,
        headers: parseRequestHeaders
      },
      save: {
        method: 'POST',
        headers: parseRequestHeaders
      }
    });

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
    $location.path('/login');
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

app.controller('PhotosIndexCtrl', ['$rootScope', '$scope', '$http', 'Photo', function ($rootScope, $scope, $http, Photo) {
  $scope.photos = [];

  $scope.searchTag = function () {
    // remove space
    var tag = $scope.tag.replace(/\s+/g, '');
    var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=d8d0d6b44249490bbde6eee4d1968dac&callback=JSON_CALLBACK';
    
    $http.jsonp(url)
      .then(function (response) {
        // success callback
        $scope.tag = '';
        $scope.photos = response.data.data;
      }, function (error) {
        // error callback
      });
  };

  if ($rootScope.currentUser) {
    $scope.savePhoto = function (photo) {
      photo.favorited = true;
      
      var photoData = {
        url: photo.images.standard_resolution.url,
        user: photo.user.username,
        likes: photo.likes.count,
        createdBy: Parse.User.current()
      };

      Photo.save(photoData, function (data) {
        // success callback
      }, function (error) {
        // error callback
      });
    };
  }
}]);

app.controller('ProfileCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
  $scope.favorites = [];
  var query = new Parse.Query("Photo");
  query.equalTo("createdBy", $rootScope.currentUser, {
    success: function (data) {
      console.log(data);
      $scope.favorites = data.results;
    },
    error: function (data, error) {
      console.log(error.message);
    }
  });
  console.log(query);
}]);


