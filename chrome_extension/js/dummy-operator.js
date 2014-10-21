if (window.HandsFree) {
	window.HandsFree.operator = (function() {
		function log(text) { console.log("Dummy Operator: " + text); }

		return { 
			scrollUp :   function(n) { log("scroll up: " + n); },
			scrollDown : function(n) { log("scroll down: " + n); },
			leftAction:  function()  { log("leftAction"); },
			rightAction: function()  { log("rightAction"); },
			readSection: function(n) { log("readSection: " + n); }
		}
	})();
}
