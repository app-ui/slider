# APP UI: Slider

A range input field with a label bundled as a custom element using [VanillaJS](http://vanilla-js.com/).

Part of [APP UI](http://github.com/app-ui)


## Examples

* [Click to view](./examples/index.html)


## Dependencies

This component relies on the following third-party libraries:

* [APP](http://makesites.org/projects/app)
* [jQuery](http://jquery.com)
* [Underscore](http://underscorejs.org)


## Install

Download the component and extract in 'components/app-ui-slider'
```
cd [project folder]
wget https://github.com/app-ui/slider/archive/master.zip
unzip master.zip -d ./components/
```

Using bower: (Old method)
```
bower install app.ui.slider
```


## Usage

The component is built on top of [APP](http://makesites.org/projects/app) which should be loaded before the component in the <head> section of your website. This library uses the non-standard method of "html imports" for loading custom elements. 


1. Include APP library

```html
<script src="components/app/build/app.min.js"></script>
```

2. Import Custom Element:
```html
<link rel="import" href="components/app-ui-slider">
```

3. Start using it!

```html
<div is="app-ui-slider"></div>
```
Currently the component extends the ```<div>``` tag.


## Options

These are the set of options you can use as attributes in your custom element:

...


## Events

...


## Credits

Originally based on [Backbone.UI.Slider](https://github.com/backbone-ui/slider) by Lyndel Thomas ( [@ryndel](http://github.com/ryndel) )

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org/)


### License

Released under the [MIT License](http://makesites.org/licenses/MIT)


