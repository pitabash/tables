sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("tables.controller.View1", {
			onInit: function () {
                 this.oRouter = this.getOwnerComponent().getRouter();
            },
            onEmployees : function(){
                this.oRouter.navTo("view2");
            },
            onCustomers : function(){
                this.oRouter.navTo("view3");
            },
            onOrders : function(){
                this.oRouter.navTo("view4");
            }
            
		});
	});
