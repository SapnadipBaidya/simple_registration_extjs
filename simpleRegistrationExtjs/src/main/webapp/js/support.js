let myStore = Ext.create('Ext.data.Store', {
	storeId: "myStore",
	fields: ['name', 'age', 'email'],
	data: [
		{ name: 'John', password: 12345, email: 'john@example.com' },
		{ name: 'Jane', password: 12345, email: 'jane@example.com' },
		{ name: 'Bob', password: 12345, email: 'bob@example.com' }
	]
});


Ext.define("custom.RegisterBox", {
	id: "registerbox",
	xtype: "custom.RegisterBox",
	extend: "Ext.container.Container",

	style: { padding: "10px", border: "solid 1px black" },
	items: [
		{
			xtype: "container",
			layout: { type: "hbox", pack: "center", align: "center" },

			items: [

				{
					xtype: "container",
					layout: { type: "hbox", pack: "top", align: "top" },
					style: { paddingRight: "40px" },
					items: [{
						xtype: 'displayfield',
						value: '<h2>Registration</h2>'
					}]
				},
				{

					xtype: "container",
					layout: { type: "hbox", pack: "center", align: "center" },
					items: [{
						xtype: 'image',
						src: './js/xyz.jpg',
						width: 80,
						height: 50,
						alt: 'My image'
					}]
				}],
			style: { padding: "10px", border: "solid 1px black" },
			height: 70
		},
		{
			xtype: "container",

			layout: { type: "vbox", pack: "center", align: "center" },
			style: { padding: "5px", border: "solid 1px black", marginTop: "10px" },
			items: [
				{
					xtype: "textfield",
					id: "name",
					fieldLabel: "Username",
					name: "name",
					emptyText: "Username",
					width: 250
				},
				{
					xtype: "textfield",
					id: "email",
					fieldLabel: "Email",
					name: "email",
					emptyText: "Email",
					width: 250,
					vtype: "email"
				}, {
					xtype: "textfield",
					id: "password",
					fieldLabel: "Password",
					name: "pass",
					emptyText: "Password",
					width: 250,
					inputType: 'password',
					listeners: {
						change: function(field, newValue) {
							//console.log('The value of the field has changed', field, newValue, oldValue, eOpts);
							if (newValue.length > 3) {
								Ext.getCmp("regBtn").setDisabled(false)

							} else { Ext.getCmp("regBtn").setDisabled(true) }

						}
					}
				}, {
					xtype: "textfield",
					id: "cpassword",
					fieldLabel: "Confirm password",
					emptyText: "Retype Password",
					name: "cpass",
					width: 250,
					inputType: 'password'
				}, {
					xtype: "container",
					width: 250,
					layout: "center",
					items: [{
						xtype: "button", id: "regBtn",
						text: 'Register',
						align: 'center',
						disabled: true,
						width: 130,
						listeners: {
							click: () => {

								if (Ext.getCmp("password").getValue() === Ext.getCmp("cpassword").getValue()) {
									if (myStore.getData().items.map(e => e.data.email).includes(Ext.getCmp("email").getValue())) {
										Ext.Msg.alert('Error', `<div>User Already Registered<br>UserName : ${Ext.getCmp("name").getValue()} </div>`);
										return 0;
									}
									Ext.Msg.alert('SUCCESS', 'PASS MATCHED YAY!!');
									myStore.add({ name: Ext.getCmp("name").getValue(), password: Ext.getCmp("password").getValue(), email: Ext.getCmp("email").getValue() })
									Ext.Msg.alert('SUCCESS', 'Login saved');
								}
								else {
									Ext.getCmp("cpassword").focus()
									Ext.Msg.alert('Password Mismatch', '<div>Please Enter the same password <br> </div>');
								}

							}
						}
					}]


				}

			]
		},


	],

	height: 400,
	width: 400
})



