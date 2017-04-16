angular.module('starter')
.controller('StatsController', function($scope,$http){

	$scope.token ="";
	$scope.precision = 0;
	$scope.time = 0;
	$scope.ratio =0;
	$scope.headshots = 0;

	$scope.getInfoAccount = function(){
    	$scope.token = localStorage.getItem('token');
      	$http({
        	url: "/api/steam/getAccount",
        	method:"GET",
        	headers: {
        	'Authorization': 'JWT ' + $scope.token
      	}
      	}).then(function(response){
        	$scope.steamAccount = response.data;
        })
    }

    $scope.getInfoStats = function(){
      	$http({
        	url: "/api/steam/getStatCSGO",
        	method:"GET",
        	headers: {
        	'Authorization': 'JWT ' + $scope.token
      	}
      	}).then(function(response){
      		console.log(response.data);
        	$scope.steamStats = response.data;

        	$scope.precision =
    		$scope.steamStats.playerstats.stats[46].value/$scope.steamStats.playerstats.stats[47].value*100;
        	$scope.time = $scope.steamStats.playerstats.stats[2].value/3600;
        	$scope.ratio = $scope.steamStats.playerstats.stats[0].value/
        	$scope.steamStats.playerstats.stats[1].value;
        	$scope.headshots = $scope.steamStats.playerstats.stats[25].value/
        	$scope.steamStats.playerstats.stats[0].value*100;
        })
    }

    $scope.getInfoAccount();
    $scope.getInfoStats();
})