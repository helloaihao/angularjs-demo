angular.module('UserInfoModule', [])

.controller('UserInfoCtrl', function($scope) {
	$scope.setVal = function() {
		$scope.userInfo = {
			username: 'helloaihao@outlook.com',
			password: '123456',
			autoLogin: true
		};
		$scope.isRed = true;
	};

	$scope.resetVal = function() {
		$scope.userInfo = {
			username: '',
			password: '',
			autoLogin: false
		};
		$scope.isRed = false;
	};
})