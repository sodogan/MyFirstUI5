sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log",
	'sap/m/MessageBox',
	"sap/m/Text"

], function (Controller, Log, MessageBox) {
	"use strict";

	function createLog(message) {
		Log.info(message);
		Log.debug(message);
	}

	function displayMessage(view) {
		var bCompact = !!view.$().closest(".sapUiSizeCompact").length;
		MessageBox.information(
			"You are about to go to the first page.", {
				styleClass: bCompact ? "sapUiSizeCompact" : ""
			}
		);
	}

	return Controller.extend("myFiori.controller.Second", {

		onBack: function () {
			var currentView = this.getView();
			var parentApp = currentView.getParent();
			createLog("Info inside the Second Controller");
			displayMessage(currentView);
			// navigate to the first view
			parentApp.to("idFirst");

		}

	});

});