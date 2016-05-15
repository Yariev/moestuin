// global namespace
var SIMSA = SIMSA || {};

SIMSA.commonMethod = {
	test:  "test",
	// Panel Class - Shows a panel in the browser.
	createPanel: function (width, height, color, $parent) {

		if(arguments.length < 2) {
			document.write("the Panel needs more information");
			return false;
		}

		var $_panelElement = $(document.createElement('span'));
		$_panelElement.attr({
			"class": "panel"
		}).
		css({
			"background-color": color
			// "width": width,
			// "height": height,
			// "position": "absolute",
			// "top": "50%",
			// "left": "50%",
			// "margin-left": -width/2,
			// "margin-top": -height/2,
		});

		if (typeof $parent === "undefined") { // not entered one.
			$parent = $(document.documentElement);
		} 
		else if(!parent) { //null, object that doesnt exist.
			return false;
		}

		$parent.append($_panelElement);

		this.addContent = function(content) {
			$_panelElement.html($_panelElement.html() + content);
		}
	}

};