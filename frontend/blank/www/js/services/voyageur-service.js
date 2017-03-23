/**
 * Created by GMI-PC on 22/03/2017.
 */
// User Service

angular.module('starter.services')

  .factory('Voyageur', function($q, $http, API) {

    return {

      get: function() {

        var deferred = $q.defer();

        $http.get(API.voyageur.get)
          .success(function(voyageur){
            deferred.resolve(voyageur);
          })
          .error(function(){
            deferred.reject('You are not authenticated.');
          })
        ;

        return deferred.promise;

      },

      login: function(loginForm) {

        var deferred = $q.defer();

        $http.post(API.voyageur.login, loginForm)
          .success(function(voyageur){
            deferred.resolve(voyageur);
            Console.log(voyageur);
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
