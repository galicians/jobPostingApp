angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope) {
	$scope.jobs = [{title: 'Sales Person', 
			description: 'you will say always the truth, hahaha'
		}, {
			title:'Accountant', 
			description:'please bring your own calculator'
		}];
});