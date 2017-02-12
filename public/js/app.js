var myApp = angular.module('myApp', [
	'ngRoute',
	'mandiControllers',
	'akoenig.deckgrid',
	'angular-loading-bar'
]);
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
			templateUrl: 'partials/list.html',
			controller: 'ListController'
		})
		.when('/user/:handle', {
			templateUrl: 'partials/list.html',
			controller: 'ListController'
		})
		.when('/details/:itemId', {
			templateUrl: 'partials/details.html',
			controller: 'DetailsController'
		}).
	otherwise({
		redirectTo: '/list'
	});


}]);