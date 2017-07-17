var args = arguments[0] || {};

if ( typeof (args.lblLeft) != "undefined") {
	$.notFoundLbl.left = args.lblLeft;
	$.requireLbl.left = args.lblLeft;
}
exports.show = function() {
	$.loader.visible = true;
	$.retryIcon.visible = false;
	$.retry.visible = false;
	$.requireLbl.visible = false;
	$.notFoundLbl.visible = false;
};
exports.hide = function() {
	$.loader.visible = false;
};
exports.hideView = function() {
	$.errorView.height = 0;
};
exports.showView = function() {
	$.errorView.height = Titanium.UI.SIZE;
};
exports.showNotFound = function() {
	Ti.API.info('showNotFound');
	$.notFoundLbl.visible = true;
};
exports.hideNotFound = function() {

	$.notFoundLbl.visible = false;
};
exports.showRequire = function(message) {
	$.requireLbl.text = message;
	$.requireLbl.visible = true;
};
exports.hideRequire = function() {
	$.requireLbl.visible = false;
};
exports.showError = function(callback, error_message) {
	$.loader.visible = false;
	$.retryIcon.visible = true;
	$.message.text = error_message;
	$.retry.visible = true;
	if (_.isFunction(callback)) {
		args.callback = callback;
	}
};
$.retry.addEventListener('click', function(e) {
	if ( typeof (args.callback) != "undefined") {
		args.callback();
	}
});

