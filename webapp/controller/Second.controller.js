sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log"
], function (Controller, Log) {
	"use strict";

	return Controller.extend("myFiori.controller.Second", {
		onBack: function () {
			function createLog(app) {
				Log.info("Info inside the Secondller" + app);
				Log.debug("Debug inside the SecondController");
			}
			var parentApp = this.getView().getParent();
			createLog(parentApp);

			parentApp.to("idFirst");

		}

	});

});