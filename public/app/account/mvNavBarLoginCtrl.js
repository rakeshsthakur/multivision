angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
	$scope.identity = mvIdentity;
	$scope.signin = function(username, password) {
		mvAuth.authenticateUser(username,password).then(function(success){
			if(success) {
				mvNotifier.notify('You have sucessfully signed in!');
			} else {
				mvNotifier.notify('User/Password is invalid');
			}
		});
	}

	$scope.signout = function() {
		mvAuth.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			mvNotifier.notify('You have sucessfully signed out!');
			$location.path('/');
		})
	}
});