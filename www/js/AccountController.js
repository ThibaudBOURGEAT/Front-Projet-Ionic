angular.module('starter')
.controller('AccountController', function($scope,$ionicPopup,$http){

    $scope.getInfo = function(){
      token = localStorage.getItem('token');
      $http({
        url: "/api/user/register/infoAccount",
        method:"GET",
        headers: {
        'Authorization': 'JWT ' + token
      }
      }).then(function(response){
        $scope.user = response.data;
      })
    }

    $scope.data = {};

    $scope.setIdSteam = function(){
      token = localStorage.getItem('token');
      console.log($scope.data);
      $http({
        url: "/api/user/register/id_steam",
        method: "POST",
        data: $scope.data,
        headers: {
        'Authorization': 'JWT ' + token
      }
      }).then(function(response){
          console.log(response.data);
      })
    }

    $scope.idSteamAlert = function(){
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.id_steam">',
    title: 'Entrez votre id_steam',
    subTitle: 'Si l\'id n\'est pas bon, vous ne pourrez pas accéder à vos stats',
    scope: $scope,
    buttons: [
      { text: 'Retour' },
      {
        text: '<b>Enregistrer</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.id_steam) {
            e.preventDefault();
          } else {
            $scope.setIdSteam();
            $scope.user.id_steam = $scope.data.id_steam;
            return $scope.user.id_steam;
          }
        }
      }
    ]
  });
  }

  $scope.setUsername = function(){
      token = localStorage.getItem('token');
      console.log($scope.data);
      $http({
        url: "/api/user/register/username",
        method: "POST",
        data: $scope.data,
        headers: {
        'Authorization': 'JWT ' + token
      }
      }).then(function(response){
          console.log(response.data);  
          if(response.data.success == false) {
            var alertPopup = $ionicPopup.alert({
            title: 'Erreur',
            template: response.data.message
            });
          }
      })
    }

    $scope.usernameAlert = function(){
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.username">',
    title: 'Entrez votre votre nouveau pseudo',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Retour' },
      {
        text: '<b>Enregistrer</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.username) {
            e.preventDefault();
          } else {
            $scope.setUsername();
            $scope.user.username = $scope.data.username;
            return $scope.user.username;
          }
        }
      }
    ]
  });
  }

  $scope.setEmail = function(){
      token = localStorage.getItem('token');
      console.log($scope.data);
      $http({
        url: "/api/user/register/email",
        method: "POST",
        data: $scope.data,
        headers: {
        'Authorization': 'JWT ' + token
      }
      }).then(function(response){
          console.log(response.data);
          if(response.data.success == false) {
            var alertPopup = $ionicPopup.alert({
            title: 'Erreur',
            template: response.data.message
            });
          }
      })
    }

    $scope.emailAlert = function(){
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.email">',
    title: 'Entrez votre nouvel email',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Retour' },
      {
        text: '<b>Enregistrer</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.email) {
            e.preventDefault();
          } else {
            $scope.setEmail();
            $scope.user.email = $scope.data.email;
            return $scope.user.email;
          }
        }
      }
    ]
  });
  }

  $scope.setPassword = function(){
      token = localStorage.getItem('token');
      console.log($scope.data);
      $http({
        url: "/api/user/register/password",
        method: "POST",
        data: $scope.data,
        headers: {
        'Authorization': 'JWT ' + token
      }
      }).then(function(response){
          console.log(response.data);
          var alertPopup = $ionicPopup.alert({
            title: 'Mot de passe',
            template: 'Votre mot de passe à été modifié'
          });
      })
    }

    $scope.passwordAlert = function(){
    var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.password">',
    title: 'Entrez votre nouveau mot de passe',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Retour' },
      {
        text: '<b>Enregistrer</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.password) {
            e.preventDefault();
          } else {
            $scope.setPassword();
            return 0;
          }
        }
      }
    ]
  });
  }

    $scope.getInfo();
})