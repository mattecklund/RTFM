var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, threadRef, $firebaseObject){
	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');	
})