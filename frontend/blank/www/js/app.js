
// Main Application JS

angular.module("starter", ["ionic", "starter.controllers", "starter.services"])

.run(function($ionicPlatform) {

	$ionicPlatform.ready(function() {

		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

	});

})

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $stateProvider
      .state("admin-login", {
        url: "/login",
        templateUrl: "templates/login-view.html",
        controller: "LoginCtrl"
        })
      .state("voyageur-login",{
        url: "/login-voyageur",
        templateUrl: "templates/login-voyageur-view.html",
        controller: "LoginVoyageurCtrl"

        })
      ;


  // Use the auth token interceptor to append the auth_token to every request
    $httpProvider.interceptors.push('AuthTokenInterceptor');
    // Fallback to this route
    $urlRouterProvider.otherwise("/login");

});
