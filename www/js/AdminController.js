angular.module('starter')
.controller('AdminController', function($scope,$http,$ionicPopup){

	$scope.pari = {};
	$scope.pari.teamname = [];

	showAlertPari = function(response) {
   		var alertPopup = $ionicPopup.alert({
     		title: 'Pari',
     		template: response.data.message
   		});
   	}

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

	$scope.registerPari = function(){
		console.log($scope.pari);
    	$scope.token = localStorage.getItem('token');
      	$http({
        	url: "/api/pari/register",
        	method:"POST",
        	data: $scope.pari,
        	headers: {
        		'Authorization': 'JWT ' + $scope.token
      		}
      	}).then(function(response){
        	showAlertPari(response);
      		$scope.displayPari();
        })
    }

    $scope.displayPari();
})