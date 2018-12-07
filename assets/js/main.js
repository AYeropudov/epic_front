let mainApp = null;

Raven.context(function () {
	initMainApp();
});

function initMainApp() {
	mainApp = new Vue({});
}