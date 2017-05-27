myWebApp.service('timeLineService', ['$rootScope', '$http', '$q', function($rootScope, $http, $q){
	
	return ({
        getTimeLineData: getTimeLineData
    });
	
	function getTimeLineData(){
		 var request = $http({
            method: "GET",
            async: true,
            cache: false,
            url: 'data/tweet-timeline-static.json'
        });
        return (request.then(handleSuccess, handleError));
	}
	
	function handleSuccess(response){
		return response.data;
	}
	
	function handleError(response){
		console.log("error in handling service");
	}
	
}]);