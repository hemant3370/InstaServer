var mandiControllers = angular.module('mandiControllers', []);
var url = null;
var json = null;
mandiControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {


	$scope.url = '/json/hemant3370';
	url = '/json/hemant3370';
	$http.get($scope.url).success(function(data) {
		$scope.mandi = data;
	})
	$scope.ListController = function() {

		$scope.url = '/json/' + $scope.key ;
		url = '/json/' + $scope.key ;
		$http.get($scope.url).success(function(data) {
			json = data;
			$scope.mandi = data;
			
		})
	}
}]);



mandiControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	// $http.get(url).success(function(data) {
        if (json) {
        	console.log("data retained");
		$scope.mandi = json;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) {
			$scope.preItem = Number($routeParams.itemId) - 1;
		} else {
			$scope.preItem = $scope.mandi.items.length - 1;
		}
		if ($routeParams.itemId < $scope.mandi.items.length - 1) {
			$scope.nextItem = Number($routeParams.itemId) + 1;
		} else {
			$scope.nextItem = 0;
		}
	}
	else{
		console.log("data not retained");
		$http.get(url).success(function(data) {
		$scope.mandi = data;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) {
			$scope.preItem = Number($routeParams.itemId) - 1;
		} else {
			$scope.preItem = $scope.mandi.items.length - 1;
		}
		if ($routeParams.itemId < $scope.mandi.items.length - 1) {
			$scope.nextItem = Number($routeParams.itemId) + 1;
		} else {
			$scope.nextItem = 0;
		}
	});
	}

}]);