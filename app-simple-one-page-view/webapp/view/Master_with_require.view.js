sap.ui.define([
		"sap/ui/core/mvc/JSView"
	], function (JSView) {
	"use strict";

	return JSView.extend("sapui5.demo.mvcapp.view.Master", {
	    
	    getControllerName: function() {
           
            return "sapui5.demo.mvcapp.controller.Master";
        },
    
       createContent: function(oController) {
           
         var aColumns = [ 
                new sap.m.Column({
                    header : new sap.m.Text({
    				    text : "ID"
    			    })
                }),
                new sap.m.Column({
                    header : new sap.m.Text({
    				    text : "Name"
    			    })
                })
            ];
            
            var oTemplate = new sap.m.ColumnListItem({
        		cells : [
        			new sap.m.ObjectIdentifier({
        				text : "{ID}"
        			}),
        			new sap.m.ObjectIdentifier({
        				text : "{Name}"
        			})
        		]
        	});
            
            var oTable = new sap.m.Table({
                columns : aColumns
            });
            
            oTable.bindItems("/Suppliers", oTemplate);
            oTable.addStyleClass("sapUiResponsiveMargin");
            
            var oPageMaster = new sap.m.Page("masterPage", {
        		title : "Supplier Overview",
        		content : [oTable]
        	});
        	return oPageMaster;
       }
	});
});