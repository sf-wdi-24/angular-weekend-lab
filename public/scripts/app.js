var app = angular.module('angular', ['ngRoute', 'ngResource']);

//routes config
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
     $routeProvider
      .when('/', {
        templateUrl: 'templates/index.html',
        controller: 'HomeCtrl'
      })
      .when('/items/:id', {
        templateUrl: 'templates/show.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

//controllers
app.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
	
	//get all
	$http.get("/api/items").then(function(data){
		console.log(data);
		$scope.items = data.data;
		console.log($scope.items);
	}, 
	function(error){
		console.error(error);
	});

	//post a new item
	$scope.addItem = function(){
		$http.post("/api/items", $scope.item).then(function(data){
			console.log(data);
			$scope.items.push(data.data);
			$scope.item ={};
		},
		 function(error){
		 console.error(error);	
		});
	};
	

}]);
app.controller('ShowCtrl', ['$scope', '$routeParams', '$location','$http', function ($scope, $routeParams, $location, $http) {
  $scope.formShow = true;
  var itemId = $routeParams.id;
  console.log(itemId);
  $http.get("/api/items/"+itemId).then(function(data){
		console.log(data);
		$scope.singleItem = data.data;
		console.log($scope.singleItem);
	},
	function(error){
		console.error(error);	
	});

	$scope.deleteItem=function(){
		$http.delete("/api/items/"+itemId).then(function(data){
			 console.log(data);
			 $location.path('/');
		}, function(error){
			console.error(error);
		});
	};

	$scope.editItem = function(){
		$http.put("/api/items/"+itemId, $scope.itemEdit).then(function(data){
			 $scope.singleItem.splice(0,1);
			 console.log(data);
			 $scope.singleItem.push(data.data[0]);
		}, function(error){
			console.error(error);
		});
	};
}]);
