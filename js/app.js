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

	$scope.addNumber = function(obj){
		 var dataValue = obj.target.attributes.data.value;
		 console.log(dataValue);
		 
		 $scope.money.expense += parseInt(dataValue);
		 console.log($scope.money.expense);
	};

	
	$scope.addExpense = function(){
		 $scope.money = {
			capital: $scope.money.capital - parseInt($scope.expense)
		};

		$scope.expense = "";
	};

	

});

