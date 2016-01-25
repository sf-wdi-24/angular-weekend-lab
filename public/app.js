var app = angular.module('mediaCzar', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/search.html',
			controller: 'SearchCtrl'
		})
		.when('/suggestion', {
			templateUrl: 'templates/suggestion.html',
			controller: 'SuggestionCtrl'
		})
		.when('/suggestion/:id', {
			templateUrl: 'templates/show.html',
			controller: 'ShowCtrl'
		});
		$locationProvider
			.html5Mode({
				enabled: true,
				requiredBase: false
		});
}]);

app.factory('Media', ['$resource', function ($resource) {
	return $resource('https://api.parse.com/1/classes/Media/:id', {id: '@id'}, {
		query: {
			isArray: true,
			headers: {
				'X-Parse-Application-Id': 'ggWoGq1JoG7MpTGtuMuP0MKUGwkmKTfhN8jLr7QI',
				'X-Parse-REST-API-Key': 'tuaB8dacTmhAgJ1A9754izAnuNYwUQN7fHMG2vC1'
			},
			transformResponse: function(data) { return angular.fromJson(data).results; }
		},
		save: {
			headers: {
				'X-Parse-Application-Id': 'ggWoGq1JoG7MpTGtuMuP0MKUGwkmKTfhN8jLr7QI',
				'X-Parse-REST-API-Key': 'tuaB8dacTmhAgJ1A9754izAnuNYwUQN7fHMG2vC1'
			}, 
			method: 'POST'
		},
		update: { method: 'PUT' }
	});
}]);

app.controller('SearchCtrl', ['$scope', '$http', 'Media', function ($scope, $http, Media) {
	$scope.search = "Search controller connected";
	//fake test data
	// $scope.data = data.Similar;
	// $scope.mediaType = ($scope.data.Results).map(function(result) { return result.Type; });
	// $scope.mediaType = $scope.mediaType.filter(function(v,i) { return $scope.mediaType.indexOf(v) == i; });
	//end test data
	$scope.searchMediaKid = function() {
		var mediaQuery = $scope.searchTerm;
		var url = 'https://www.tastekid.com/api/similar?info=1&k=197890-mediacza-EWRGAOVO&q=' + mediaQuery + '&callback=JSON_CALLBACK';
		$http.jsonp(url)
		.then(function (response) {
			$scope.data = response.data.Similar;
			console.log($scope.data);
			$scope.mediaType = ($scope.data.Results).map(function(result) { return result.Type; });
			$scope.mediaType = $scope.mediaType.filter(function(v,i) { return $scope.mediaType.indexOf(v) == i; });
			$scope.searchResults = true;
		}, 
		function(error) {
			console.error(error);
		});
	};
	$scope.newSearch = function() {
		$scope.searchTerm = null;
		$scope.searchResults = false;
	};

	$scope.saveMedia = function(result) {
		var suggestion = {
			'name': result.Name,
			'type': result.Type,
			'wikiDesc': result.wTeaser,
			'wikiUrl': result.wUrl,
			'youtubeUrl': result.yUrl,
			'youtubeId': result.yID
		};
		Media.save(suggestion, function (data) {
			objectId = data.objectId;
		});
	};
}]);

app.controller('SuggestionCtrl', ['$scope', '$http', 'Media', function ($scope, $http, Media) {
	// Get saved suggestions
	Media.query(function(data) {
		$scope.suggestions = data;
	});
}]);

app.controller('ShowCtrl', ['$scope', '$http', '$routeParams', '$sce', 'Media', function ($scope, $http, $routeParams, $sce, Media) {
	var mediaId = $routeParams.id;
	Media.query({ where: {'objectId': mediaId }},
		function (data) {
			$scope.item = data[0];
			console.log($scope.item);
			$scope.video = $sce.trustAsResourceUrl($scope.item.youtubeUrl);
			console.log($scope.video);
		}
	);
}]);



