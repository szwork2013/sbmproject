angular.module('starter.controllers', [])

.controller('DashCtrl', ["$scope",function($scope) {}])

.controller('ChatsCtrl', ["$scope", "Chats",function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}])

.controller('ChatDetailCtrl', ["$scope", "$stateParams", "Chats",function($scope, $stateParams, Chats) {
	console.log($scope);

	console.log($stateParams);
  $scope.chat = Chats.get($stateParams.chatId);
}])

.controller('AccountCtrl', ["$scope",function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}]);