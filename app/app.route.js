myWebApp.config(['$locationProvider', '$routeProvider', '$httpProvider' , function($locationProvider, $routeProvider, $httpProvider){

  $routeProvider.
	when("/home", {
        templateUrl: "app/components/twitter-timeline/twitter-timeline.html",
		controller:'timeLineController'
    }).
	when("/switch-users", {
        templateUrl: "app/components/switch-user/switch-user.html"
    }).
	otherwise({
        redirectTo: '/home'
    });
	
}]);


