angular.module('myApp',['ui.router']);

angular.module('myApp')
.config(function ($urlRouterProvider) {

	$urlRouterProvider.otherwise('/index');

});

angular.module('myApp')
.config(function ($stateProvider) {

	$stateProvider
	.state('index', {
		url: '/index',
		templateUrl: 'index.html'
	})

	.state('header', {
		parent: 'index',
		url: '/header',
		views: {
			'@index': {
				templateUrl: 'header.html'
			}
		}
	})

	.state('header.footer', {
		url: '/footer',
		views: {
			'@index': {
				templateUrl: 'footer.html'
			}
		}
	})
});

