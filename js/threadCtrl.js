var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, threadRef, $firebaseObject, $firebaseArray, commentsRef){
	console.log(threadRef);
	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');	
	console.log(thread)

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text){
		$scope.comments.add({
			username: username,
			text: text
		})
	};



})