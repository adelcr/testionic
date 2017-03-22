// Constants for the API

angular.module('starter.services')

.factory('API', function(){

	// Url of Node API
	var apiUrl = 'http://localhost:5000/api';

	// Base Routes
	var baseAdminRoute = apiUrl + '/admin';

	return {

		// Admin Routes
		admin: {
			get: baseAdminRoute + '/get'
			, login: baseAdminRoute +'/login'
		}

	}

});
