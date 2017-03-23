// Main App Ctrl

angular.module('starter.controllers')

.controller('AppCtrl', function($scope){

	console.log('AppCtrl');

	$scope.$on('voyageur:set', function(event, voyageur){
		$scope.voyageur = voyageur;
	});

});
