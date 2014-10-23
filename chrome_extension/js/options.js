function OptionCtlr($scope, $timeout) {

	$scope.successMessage = '';
	$scope.errorMessage = '';
	var setMessage = function(message, isError) {
		$scope.successMessage = '';
		$scope.errorMessage = '';
		if (isError) {
			$scope.errorMessage = message;
		} else {
			$scope.successMessage = message;
		}
		jQuery('html,body').animate({ scrollTop: 0 });
	}

	$scope.save = function() {
		window.HandsFree.save($scope.options);
		setMessage('Option setting was saved to strage successfully.', false);
	};

	$scope.load = function(showMessage) {
		window.HandsFree.load(function(options) {
			$scope.options = options;
			if (showMessage) {
				setMessage('Option setting was loaded from strage successfully.', false);
			}
			$scope.$apply(); //手動反映
		});
	};

	$scope.reset = function() {
		window.HandsFree.clear();
		$scope.load(false);
		setMessage('Option setting was reset to default successfully.', false);
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

	$scope.deleteSiteSetting = function() {
		$scope.options.siteSettings.splice(this.$index, 1);
		setMessage('Site setting was deleted successfully (not deleted from storage yet).', false);
	}

	// 初期表示用
	$scope.load(false);
}