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
                                //login();

                                ///
                                alert("hteryh");
                                var redirectUrl = Ext.Object.toQueryString({
                                    redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
                                    client_id: MyApp.app.facebookAppId,
                                    response_type: 'token'
                                });
                                this.setHtml([
                                '<h2>Welcome to Jog with Friends</h2>',
                                '<p>With this app you can log your runs and share your progress with your friends</p>',
                                '<p>In order to use Jog with Friends you must sign in with your Facebook account.</p>',
                                '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',
                                '<div class="fb-facepile" data-app-id="' + MyApp.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>'
                                ].join(''));
                                FB.XFBML.parse(Ext.getCmp("containerPrueba"));
                                ///


                            } else {
                                // not_logged_in
                                //login();


                                ///
                                alert("hteryh");
                                var redirectUrl = Ext.Object.toQueryString({
                                    redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
                                    client_id: MyApp.app.facebookAppId,
                                    response_type: 'token'
                                });
                                this.setHtml([
                                '<h2>Welcome to Jog with Friends</h2>',
                                '<p>With this app you can log your runs and share your progress with your friends</p>',
                                '<p>In order to use Jog with Friends you must sign in with your Facebook account.</p>',
                                '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',
                                '<div class="fb-facepile" data-app-id="' + MyApp.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>'
                                ].join(''));
                                FB.XFBML.parse(Ext.getCmp("containerPrueba"));
                                ///



                            }
                        },{ perms: 'email' });
                        }
                        catch(e){
                            Ext.Msg.alert('Aviso', 'No se pudo conectar con Facebook.', Ext.emptyFn);
                        }
                },
                text: 'Connect / Log In'
            }
        ]
    }

});