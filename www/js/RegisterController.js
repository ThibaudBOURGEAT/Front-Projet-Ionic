angular.module('starter')
.controller('RegisterController', function($scope,$state,$ionicPopup,$http){

	$scope.user = {};

	showAlertRegister = function(response){
		var alertPopup = $ionicPopup.show({
     		title: 'Message',
     		template: response.data.message,
     		buttons: [
      			{ 
      				text: 'Ok',
      				type: 'button-positive',
      				onTap: function(e) {
          					if (response.data.success) {
            					$state.go('login');
          					} else {
            					return 0;
          					}
          				}
      			}
      		]
   		});
	}

	$scope.register = function(){
		$scope.user.del = false;
		$scope.user.admin = false;
		$http({
			url: "/api/user/register",
			method:"POST",
			data: $scope.user
		}).then(function(response){
			showAlertRegister(response);
		})
	}
	
})