/*
 * File: app.js
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

Ext.Loader.setConfig({

});

Ext.application({
    views: [
        'MyContainer'
    ],
    name: 'MyApp',

    launch: function() {
        this.facebookAppId = '343895802382049';

        //---------------------------------------------CODIGO DE INICIALIZACION----------------------------------------------------------
        //codigo de facebook:
        try{
            //FACEBOOK SDK
            FB.init({ appId: "343895802382049", nativeInterface: CDV.FB, useCachedDialogs: false });
            testAPI = function(){
                FB.api('/me', function(response) {
                    Ext.Msg.alert('Aviso', 'Sesión iniciada correctamente '+response.name, Ext.emptyFn);
                });
            };
            //login function
            login = function() {
                //    alert("fgey");
                FB.login(function(response) {
                    if (response.authResponse) {
                        // connected
                        //alert('Su información: '+response.name+','+response.authResponse.userID+','+response.authResponse.accessToken+','+response.authResponse.expiresIn+','+response.authResponse.signedRequest);
                        testAPI();
                    } else {
                        Ext.Msg.alert('Aviso', 'Sesión no iniciada.', Ext.emptyFn);
                    }
                });
            };
        }
        catch(e){
            Ext.Msg.alert('Aviso', 'No se pudo conectar con FB', Ext.emptyFn);
        }




        Ext.create('MyApp.view.MyContainer', {fullscreen: true});
    }

});
