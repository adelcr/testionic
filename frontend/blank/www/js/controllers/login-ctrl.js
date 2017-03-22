// Login Ctrl

angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $ionicModal, $ionicPopup, Admin){

	console.log('LoginCtrl');

	$scope.loginForm = {};

	// Load the Login Modal
	$ionicModal.fromTemplateUrl('templates/login-view.html', {
		scope: $scope,
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Remove the Modal when this scope is destroyed
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	// Show the Modal if the auth-login-required function is fired
	$scope.$on('auth:login-required', function(){
		console.log('Login required!');
		$scope.modal.show();
	});

	$scope.login = function() {

		console.log($scope.loginForm);

    Admin.login($scope.loginForm).then(
			function(response) {
				$scope.modal.hide();
			},
			function(err) {
				$ionicPopup.alert({
					title: 'Login Error',
					template: err.message
				});
			})
		;

	};

});
