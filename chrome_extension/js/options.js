function OptionCtlr($scope) {
	console.log('OptionCtlr called!');
	$scope.save = function() {
		console.log('saveOptoin called');
		window.HandsFree.save($scope.options);
	};
	window.HandsFree.load(function(options) {
		console.log('load called');
		$scope.options = options;
		$scope.$apply(); //手動反映
	});
}