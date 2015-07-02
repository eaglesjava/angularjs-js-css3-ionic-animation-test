
angular.module("mainModule", [])

.controller("mainController", function($scope) {
	$scope.onEditChangeResult = "";

	$scope.onEditChange = function() {
		$scope.onEditChangeResult = "the value is '" + $scope.editValue + "'";
	};

});