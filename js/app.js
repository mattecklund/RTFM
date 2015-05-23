var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.constant('fb', {
	url: 'https://rtfm-mecklund.firebaseio.com/'
})

app.config(function($routeProvider){
	$routeProvider
		.when('/threads', {
			templateUrl: 'templates/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadService){
					// console.log('in the router\'s resolve object');
					return threadService.getThreads();
				}
			}
		});
		
		.when('/threads/:threadId', {
			templateUrl: 'templates/thread.html',
			controller: 'threadCtrl',
			resolve: {
				threadRef: function(threadService, $route){
					return threadService.getThread($route.current.params.id)
				}
			}
		});

		.otherwise({
			redirectTo: '/threads'
		})
})