# CircularProgressbar [![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)

Alloy Widget for creating a On Screen Loader.


## Quick Start

### Installation [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/com.caprede.loadingIndicator)
Download the latest distribution ZIP-file and consult the [Titanium Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module) on how install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install com.caprede.loadingIndicator`

### Usage

// either: By defining widget in xml
create in xml
```xml
<Alloy>
	<Window class="container">
            <View id="loadingView">
		  <Widget src="com.caprede.loadingIndicator" id="loader" />
            </View>
	</Window>
</Alloy>
```

// or: By defining widget in controller
update in controller
```javascript
var loader = Alloy.createWidget('com.caprede.loadingIndicator', 'widget', {});
$.loadingView.add(loader.getView());
```

## API

### Methods
* `hide()` - turns off the visibility
* `show()` - turns on the visibility
* `hideView()` - Remove the loader
* `showNotFound()` - Show the message when there is no data in api response
* `hideNotFound()` - Hide the message of no data found
* `showError(callback, message)` - Show the error message with retry option when the api goes into the error
	* `callback` _(Function)_ - gets called when clicked on the retry message
  * `message` _(Text)_ - the text appears on the screen in case of error
