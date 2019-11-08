sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/base/Log",
		'sap/m/MessageBox',
		"sap/m/Text",
		"sap/ui/model/json/JSONModel"
	],
	function (Controller, Log, MessageBox, JSONModel, Text) {
		"use strict";
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
		});

		function Utility() {
			this.createLog = function (message) {
				Log.info(message);
				Log.debug(message);
			};
			this.displayMessage = function (information) {
				MessageBox.information();
			};
		}

		function createLog(app) {
			Log.info("Info inside the FirstController" + app);
			Log.debug("Debug inside the FirstController");
		}

		function displayMessage(view) {
			var bCompact = !!view.$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				"You are about to go to the next page.", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		}
		return Controller.extend("myFiori.controller.First", {
			onNext: function () {

				var currentView = this.getView();
				var parentApp = currentView.getParent();
				var util = new Utility();
				util.createLog("testing utils");
				createLog(parentApp);
				displayMessage(currentView);
				/*Log.warning("Aquí un warning");
				Log.error("Aquí un error");
				Log.fatal("Aquí una catástrofe");
				*/
				parentApp.to("idSecond");
			}
		});
	});