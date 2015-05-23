var app = angular.module('rtfmApp');

app.service('threadService', function($http, $q, fb){
	// stuff

	this.getThread = function(threadId){
		return new Firebase(fb.url + '/threads/' + threadId);
	};

	this.getThreads = function(){
		// console.log(fb);
		return new Firebase(fb.url);
	}

})