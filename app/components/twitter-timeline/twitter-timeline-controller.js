myWebApp.controller('timeLineController', ['$rootScope', '$scope', '$location', '$window', 'timeLineService', function($rootScope, $scope, $location, $window, timeLineService) {	
	
	init();

	function init(){
		timeLineService.getTimeLineData().then(handleSuccess, handleError);
		$scope.addTweet = addTweet;
		$scope.user = {
			name: "pavan Ikkurthi",
			id: "@Ikkurthi Pavan",
			image: "assets/img/profile-img.jpg"
		};
	}
	
	function addTweet(){
		if($scope.user.description){
			var tweet={
			 id: $scope.user.id,
			 name: $scope.user.name,
			 profile_image: $scope.user.image,
			 description: $scope.user.description,
			}
			$scope.timeLinedata.unshift(tweet);
			$scope.user.description = "";
		}
	}
	
	function handleSuccess(responseObj){
		$scope.timeLinedata = responseObj;
	}
	
	function handleError(errorObj){
		console.log("error in calling service");
	}
	
	
}]);