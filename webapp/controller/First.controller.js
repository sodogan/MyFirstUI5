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

		var util = new Utility();

		// Attach an anonymous function to the SAPUI5 'init' event
		sap.ui.getCore().attachInit(function () {
			// Create a JSON model from an object literal
			/*
			var oModel = new JSONModel({
				greetingText: "Hi, my name is Harry Hawk"
			});
			// Assign the model object to the SAPUI5 core
			sap.ui.getCore().setModel(oModel);

			// Display a text element whose text is derived
			// from the model object
			new Text({
				text: "{/greetingText}"
			}).placeAt("content");
			*/
			util.createLog("Inside the attachInit");

		});

		return Controller.extend("myFiori.controller.First", {
			onNext: function () {
				var currentView = this.getView();
				var parentApp = currentView.getParent();

				util.createLog("Inside the First Controller return");
				util.displayMessage(currentView);
				//goto the next view
				parentApp.to("idSecond");
			}
		});
	});