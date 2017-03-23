// Constants for the API

angular.module('starter.services')

.factory('API', function(){

	// Url of Node API
	var apiUrl = 'http://localhost:5000/api';

	// Base Routes
	//var baseAdminRoute = apiUrl + '/admin';
  var baseVoyageurRoute = apiUrl + '/voyageur';

	return {

		/* Admin Routes
		admin: {
			get: baseAdminRoute + '/get'
			, login: baseAdminRoute +'/login'
		},*/
    // Admin Routes
    voyageur: {
       get: baseVoyageurRoute + '/get'
      , login: baseVoyageurRoute +'/login'
  }

	}

});
