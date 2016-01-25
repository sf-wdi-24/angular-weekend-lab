var app = angular.module('foundInSFApp', ['ngRoute', 'leaflet-directive']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/game', {
                templateUrl: 'templates/game.html',
                controller: 'GameCtrl'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
]);

app.factory("GameData", ["$http", function($http) {
    return {
        query: function() {
            return $http.get("http://localhost:3000/random.json");
        }
    };
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.homeTest = "Welcome to the homepage!";
}]);

app.controller('GameCtrl', ['$scope', 'GameData', function($scope, GameData) {
    $scope.loaded = false;
    $scope.gameData = {};
    GameData.query().success(function(gameData) {
        console.log("query success", gameData);
        $scope.loaded = true;
        $scope.gameData = gameData;

    });

    var guessLat = 37.7633;
    var guessLng = -122.4367;

    angular.extend($scope, {
        center: {
            lat: 37.7633,
            lng: -122.4367,
            zoom: 12
        },
        defaults: {
            scrollWheelZoom: false
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        },
        markers: {
            Guess: {
                lat: guessLat,
                lng: guessLng,
                message: "Drag marker to guess location",
                focus: true,
                draggable: true
            }
        }
    });
    $scope.$on('leafletDirectiveMarker.dragend', function(event, args) {
        console.log("dragged!", event, args);
        guessLat = args.model.lat;
        guessLng = args.model.lng;
    });
    $scope.guess = function() {
      console.log("guessed", guessLat, guessLng);
      var imageLat = $scope.gameData.latitude;
      var imageLng = $scope.gameData.longitude;

      console.log("image location", imageLat, imageLng);
      $scope.markers.Image = {
        lat: imageLat,
        lng: imageLng,
        message: "You were close!",
        focus: true,
        draggable: false
      };
    };
}]);