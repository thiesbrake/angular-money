// Initialize App

var app = angular.module("app", ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeController'
	});

	$routeProvider.otherwise({ redirectTo: '/home' });
});


// Home Controller

app.controller('HomeController', function($scope){

	$scope.money = {
			capital: 425,
			expense: 0
	};
	
	$scope.addExpense = function(){
		 $scope.money = {
			capital: $scope.money.capital - parseInt($scope.expense),
			expense: $scope.money.expense + parseInt($scope.expense)
		};

		$scope.expense = "";

		// Log the money object
		console.log($scope.money);
	};

});

