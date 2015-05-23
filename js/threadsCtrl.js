var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){
	// console.log(threadsRef);
	$scope.threads = $firebaseArray(threadsRef);

	$scope.createThread = function(username, title){
		// stuff
		$scope.threads.$add({
			username: username,
			title: title
		});
	}




})