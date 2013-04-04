/*
 * File: app/view/MyContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyContainer', {
    extend: 'Ext.Container',

    config: {
        id: 'containerPrueba',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'FacebookConnect'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    try{




                        FB.getLoginStatus(function(response) {
                            if (response.status == 'connected') {
                                alert('logged in');
                            } else {
                                alert('not logged in');
                            }
                        });





                        FB.getLoginStatus(function(response) {
                            if (response.status=="connected") {
                                var url = '/me?fields=name,email';
                                FB.api(url, function(response) {
                                    //se envia por extraParams la info del usuario de FB

                                    //variables para enviar por extraParams
                                    alert(response.name);
                                    alert(response.id);
                                    alert(response.email);	
                                    alert(response.birthday);
                                    alert(response.picture);
                                });

                                Ext.Msg.alert('Aviso', 'Su sesión ya está iniciada y autorizada.', Ext.emptyFn);

                            } else if (response.status=="not_authorized") {
                                // not_authorized
                                login();

                                ///
                                ///


                            } else {
                                // not_logged_in
                                login();


                                ///
                                ///



                            }
                        },{ perms: 'email' });
                        }
                        catch(e){
                            Ext.Msg.alert('Aviso', 'No se pudo conectar con Facebook.', Ext.emptyFn);
                        }


                        //Ext.getCmp("panelFacebookDisplay").setHidden(0);

                },
                text: 'Connect / Log In'
            }
        ]
    }

});