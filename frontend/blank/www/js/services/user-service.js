// User Service

angular.module('starter.services')

.factory('Admin', function($q, $http, API) {

    return {

    	get: function() {

    		var deferred = $q.defer();

        	$http.get(API.admin.get)
        		.success(function(admin){
        			deferred.resolve(admin);
        		})
        		.error(function(){
        			deferred.reject('You are not authenticated.');
        		})
        	;

        	return deferred.promise;

    	},

      login: function(loginForm) {

        var deferred = $q.defer();

        $http.post(API.admin.login, loginForm)
            .success(function(admin){
                deferred.resolve(admin);
                Console.log(admin);
            })
            .error(function(err){
                deferred.reject(err);
            })
        ;

        return deferred.promise;

      }
    }

})

;
