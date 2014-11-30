(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);
	var view = null;

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather attributes
		var min = this.getAttribute("min");
		var max = this.getAttribute("max");
		var step = this.getAttribute("step");
		// set options
		var options = {
			url: "../assets/html/app.ui.slider.html"// use template html instead...
		};
		if(min) options.min = min;
		if(max) options.max = max;
		if(step) options.step = step;
		// ...
		options.el = this;
		// instantiate view
		if( view === null ) view = new APP.UI.Slider( options );

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('ui-slider', {
		prototype: el
	});
}());
