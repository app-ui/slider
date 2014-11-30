(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);
	var view = null;

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather options
		var options = {
			max: 100, // use attributes for min/max values
			url: "../assets/html/app.ui.slider.html"// use template html instead...
		};
		// ...
		options.el = $(this);
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
