# onscreeen_loader
Loader to show onpage loading with the error message on error of api

# Use
Add widget in a view in which you wants to show the loader

var loader = Alloy.createWidget('com.caprede.loadingIndicator', 'widget', {});
$.loadingView.add(loader.getView());

Method : show()      
Description : Show the loader in the view.        
Example : loader.show();

Method : hide()      
Description : Hide the loader from the view.        
Example : loader.hide();

Method : hide()      
Description : Hide the loader from the view. In case, you wants to show the loader again on the same screen after performing some function.    
Example : loader.hide();

Method : hideView()      
Description : Remove the loader from the view. 
Example : loader.hideView();

Method : showNotFound()      
Description : Shows the message when there is no data in the api. 
Example : loader.showNotFound();

Method : showError()      
Description : When api goes into error, retry option will be shown with function to callback the function defined in the parameter and displaying the message given in the parameter. 
Example : loader.showError(function(){},"Message");

Method : showRequire()      
Description : Shows the message when there is a parameter missing in the api request body. 
Example : loader.showRequire();
