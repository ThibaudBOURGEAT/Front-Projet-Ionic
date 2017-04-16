angular.module('starter')
.controller('HomeController', function($scope,$http){

	$scope.displayPari = function(){
   		$scope.token = localStorage.getItem('token');
      	$http({
        	url: "/api/pari/register/display",
        	method:"GET",
        	headers: {
        		'Authorization': 'JWT ' + $scope.token
      		}
      	}).then(function(response){
        	$scope.paris = response.data;
        })
   	}

   	$scope.displayPari();
})