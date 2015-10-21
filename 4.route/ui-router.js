angular.module('myApp',['ui.router']);

angular.module('myApp')
.config(function ($urlRouterProvider) {

	$urlRouterProvider.otherwise('/index');

});

angular.module('myApp')
.config(function ($stateProvider) {

	//$urlRouterProvider.otherwise('/index');

	$stateProvider
	.state('index', {
		url: '/index',
		views: {
			'': {
				templateUrl: 'index.html'
			},
			'header@index': {
				templateUrl: 'header.html'
			},
			'footer@index': {
				templateUrl: 'footer.html'
			}
		}
	})
});

