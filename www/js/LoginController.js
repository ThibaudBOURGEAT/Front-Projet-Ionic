angular.module('starter')
.controller('LoginController', function($scope,$state,$ionicPopup,$http){

	$scope.user = {};

	$scope.login = function(){
		$http({
			url: "/api/user/login",
			method:"POST",
			data: $scope.user
		}).then(function(response){
			console.log(response.data);
			showAlertLogin(response);
		})
	}

	showAlertLogin = function(response){
		var alertPopup = $ionicPopup.show({
     		title: 'Message',
     		template: response.data.message,
     		buttons: [
      			{ 
      				text: 'Ok',
      				type: 'button-positive',
      				onTap: function(e) {
          					if (response.data.success) {
          						localStorage.setItem('token', response.data.token);
            					$state.go('home');
          					} else {
            					return 0;
          					}
          				}
      			}
      		]
   		});
	}
})