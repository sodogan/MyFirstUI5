sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("myFiori.controller.App", {
		onInit: function (evt) {
			/*
				var oHelloModel = new JSONModel(sap.ui.require.toUrl("model") + "/Address.json");
				this.getView().setModel(oHelloModel, "address");
			*/
		}

	});
});