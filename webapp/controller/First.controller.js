sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/base/Log",
		'sap/m/MessageBox',
		"sap/m/Text",
		"sap/ui/model/json/JSONModel"
	],
	function (Controller, Log, MessageBox, JSONModel, Text) {
		"use strict";
		//Custom class to help logging
		function Utility() {
			this.createLog = function (message) {
				Log.info(message);
				Log.debug(message);
			};
			this.displayMessage = function (view) {
				var bCompact = !!view.$().closest(".sapUiSizeCompact").length;
				MessageBox.information(
					"You are about to go to the next page.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			};
		}

		return Controller.extend("myFiori.controller.First", {
			onInit: function (evt) {

				var oResourceModel = new sap.ui.model.resource.ResourceModel({
					bundleName: "myFiori.i18n.i18n"
				});

				// Assign the model object to the SAPUI5 core using the name "i18n"
				sap.ui.getCore().setModel(oResourceModel, "i18n");

				// set explored app's demo model on this sample
				/*
								var oData = {
									address: {
										Name: "SAP SE",
										Street: "Dietmar-Hopp-Allee",
										HouseNumber: "16",
										ZIPCode: "69190",
										City: "Walldorf",
										Country: "Germany",
										Url: "www.sap.com",
										Twitter: "@sap",
										Tel: "+49 6227 747474",
										Email: "info@sap.com"
									}
								};
								var oModel = new JSONModel(oData);
								this.getView().setModel(oModel);
				*/
				//var oHelloModel = new JSONModel(sap.ui.require.toUrl("model") + "/Address.json");
				//this.getView().setModel(oHelloModel, "address");

			},
			onNext: function () {
				var currentView = this.getView();
				var parentApp = currentView.getParent();
				var util = new Utility();

				util.createLog("Inside the First Controller return");
				util.displayMessage(currentView);
				//goto the next view
				parentApp.to("idSecond");
			}
		});
	});