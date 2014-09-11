var pwnedApp = angular.module('pwnedApp', ['angular.pwned']);

pwnedApp.controller('PwnedCtrl', ['$scope', function($scope) {
	$scope.myEmail = '';
}]);
