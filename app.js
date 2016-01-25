
var app = angular.module('todoApp', ['ngRoute', 'ngResource']);

var parseRequestHeaders = {
  'X-Parse-Application-Id': 'KrqgWbGF7B0A0eKX7EmgLD8OttyXM0w2yPeVkdLC', 
    'X-Parse-REST-API-Key': '8ANRXs2nigDCKmsDIOp0v0fz554FN0i0SFVAIIMn'
  };



app.factory('Todo', ['$resource', function ($resource) {
  return $resource('https://api.parse.com/1/classes/Todo:todoId', { todoId: '@TodoId' },
    {
      query: {
        method: 'GET',
        isArray: false,
        headers: parseRequestHeaders,
        transformResponse: function(data) { return angular.fromJson(data).objects; }
      },
      save: {
        method: 'POST',
        headers: parseRequestHeaders,
        transformResponse: function(data) { return angular.fromJson(data).objects; }
      }
    });
}]);




app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/todos.html',
      controller: 'todoCtrl'
    })
 
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

app.controller('todoCtrl', ['$scope','Todo', function ($scope , Todo) {


  $scope.addTodo = function(todo){
    var newTodo = {
    title: todo.title,
    description: todo.description
  };

  Todo.save(todoData, function (data) {
    // success callback
  }, function (error) {
    // error callback
  });
};

}]);






