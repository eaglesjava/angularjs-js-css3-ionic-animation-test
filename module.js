
var ballApp = angular.module('BallApp', []);

ballApp.controller('LunchCtrl', function($scope) {

	$scope.change = function() {

	alert($scope.selectLunch);

    };

});
