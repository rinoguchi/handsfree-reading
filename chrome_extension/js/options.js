function OptionCtlr($scope) {
	$scope.save = function() {
		window.HandsFree.save($scope.options);
	};
	$scope.load = function() {
		window.HandsFree.load(function(options) {
			$scope.options = options;
			$scope.$apply(); //手動反映
		});
	};
	$scope.reset = function() {
		window.HandsFree.clear();
		$scope.load();
	}
	$scope.addSiteSetting = function() {
		$scope.options.siteSettings.push({
			name: '',
			url: '',
			sections: [
				{ name: '0', func: 'function() {return "0";}' },
				{ name: '1', func: 'function() {return "1";}' },
				{ name: '2', func: 'function() {return "2";}' },
				{ name: '3', func: 'function() {return "3";}' },
				{ name: '4', func: 'function() {return "4";}' },
				{ name: '5', func: 'function() {return "5";}' },
				{ name: '6', func: 'function() {return "6";}' },
				{ name: '7', func: 'function() {return "7";}' },
				{ name: '8', func: 'function() {return "8";}' },
				{ name: '9', func: 'function() {return "9";}' }
			]
		});
	}

	$scope.load();
}