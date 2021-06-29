sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("tables.controller.View3", {
			onInit: function () {
                 this.oRouter = this.getOwnerComponent().getRouter();
            },
            onEmployees : function(){
                this.oRouter.navTo("view2");
            },
            onProducts : function(){
                this.oRouter.navTo("view1");
            },
            onOrders : function(){
                this.oRouter.navTo("view4");
            }
		});
	});
