Ext.onReady(function() {
	Ext.create("Ext.container.Container", {
		layout:{type:"vbox",pack:"center",align:"center"},
		height:700,
		items: [{ xtype: "custom.RegisterBox"}], renderTo: Ext.getBody()
	})

});

