angular.module('angular.pwned', [])
.directive('pwned', ['$http', '$timeout', function($http, $timeout) {
	return {
		require: 'ngModel',
		link: function postLink(scope, ele, attrs, c) {
			var timerId = null;
			var timerDelay = 1000; // Delay time in milliseconds
			scope.$watch(attrs.ngModel, function(newValue, oldValue) {
				if( timerId != null ) {
					$timeout.cancel(timerId);
					timerId = null;
				}
				function doGet() {
					$http({
						method:'GET',
						url:'https://haveibeenpwned.com/api/v2/breachedaccount/' + ele[0].value
					}).success(function(data, status, headers, cfg) {
						timerId = null;
						scope[attrs.pwned] = data;
						c.$setValidity('ispwned', false);
					}).error(function(data, status, headers, cfg) {
						timerId = null;
						scope[attrs.pwned] = undefined;
						c.$setValidity('ispwned', true);
					});
				}
				if (ele[0].value !== "") {
					timerId = $timeout(doGet, timerDelay);
				}
			})
		}
	}
}]);