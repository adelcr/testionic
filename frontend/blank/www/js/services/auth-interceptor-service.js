/**
 * Created by GMI-PC on 22/03/2017.
 */

angular.module('starter.services')

  .factory('AuthTokenInterceptor', function ($q, Storage) {
    return {
      request: function (config) {

        var authToken = Storage.get("authToken");
        config.headers = config.headers || {};

        if (authToken) {
          config.headers.Authorization = 'Bearer ' + authToken;
        }

        return config || $q.when(config);

      }
    };
  });
