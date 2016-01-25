var app = angular.module('chuckNorrisJokes', ['ngRoute', 'ngResource']);

// Initial variable setting
var category = 'nerdy';
var parseRequestHeaders = {
  'X-Parse-Application-Id': 'kEMaSLjFadCnoIPKC6nAwEcfqOXqxyborhGJLE7V',
  'X-Parse-REST-API-Key': 'iQtlHG3KCr6JvOY9LRX8XWqi8vyHCUDfYFhg0Ggt'
};

// Service for shared property of category (for joke api query)
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

// Joke api query
app.factory('J', ['$http', function ($http) {
  var baseUrl = "http://api.icndb.com/jokes/random/15?limitTo=";
  return {
    query:function(category){
      return $http.get(baseUrl+"["+category+"]");
    }
  };
}]);

// Parse api
app.factory('Favorite', ['$resource', function ($resource) {
  return $resource('https://api.parse.com/1/classes/Favorite/:favoriteId', { favoriteId: '@favoriteId' },
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

// Routes
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/welcome.html',
      controller: 'WelcomeCtrl'
    })
    .when('/jokes', {
      templateUrl: 'templates/jokes.html',
      controller: 'JokesCtrl'
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

// Welcome (choose personality) controller
app.controller('WelcomeCtrl', ['$scope', 'sharedProperties', 'J', '$location', function ($scope, sharedProperties, J, $location) {
  $scope.catSubmit = function() {
    sharedProperties.setProperty($scope.category);
    $location.path('/jokes');
  };
}]);

// Jokes controller
app.controller('JokesCtrl', ['$scope', 'sharedProperties', 'J', 'Favorite', function ($scope, sharedProperties, J, Favorite) {
  $scope.jokesResults = J.query(sharedProperties.getProperty());
  $scope.category = sharedProperties.getProperty();
  
  // Swap image on joke page depending on personality chosen
  if($scope.category == 'explicit'){
    $scope.url = 'http://www.writecamp.org/writecamp//files/copy_images/Vd3MJo.jpg';
  } else {
    $scope.url = 'http://leveleleven.com/wp-content/uploads/2014/05/Chuck5.png';
  }

  // Save joke to parse db
  $scope.favorite = function (favorite_joke) {
    
    var faveData = {
      id: favorite_joke.id,
      joke: favorite_joke.joke,
      category: favorite_joke.categories[0]
    };

    Favorite.save(faveData, function (data) {
      console.log("success");
    }, function (error) {
      console.log(error);
    });

  };
  
}]);

// Favorites controller
app.controller('FavoritesCtrl', ['$scope', 'Favorite', function ($scope, Favorite) {
  $scope.favorites = Favorite.query();
}]);


