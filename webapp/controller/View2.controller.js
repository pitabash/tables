sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("tables.controller.View2", {
			onInit: function () {
                 this.oRouter = this.getOwnerComponent().getRouter();
            },
            onProducts : function(){
                this.oRouter.navTo("view1");
            },
            onCustomers : function(){
                this.oRouter.navTo("view3");
            },
            onOrders : function(){
                this.oRouter.navTo("view4");
            }
		});
	});
