Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Mapas'
    ],
 
    launch: function() {
        //sync
        Ext.onReady(function(){
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [
                {
                    id: 'mainViewportId',
                    collapsible: false,
                    region: 'center',
                    layout: 'fit',
                    border: true,
                    tbar: [{
                        xtype: 'button',
                        id: 'simpleMapId',
                        text: 'Simple'

                    },'-',{
                        xtype: 'button',
                        id: 'puntoSimpleId',
                        text: 'Punto Simple'

                    },'-',{
                        xtype: 'button',
                        id: 'puntosId',
                        text: 'Puntos'

                    },'-',{
                        xtype: 'button',
                        id: 'infoWindowId',
                        text: 'Info Window'

                    },'-',{
                        xtype: 'button',
                        id: 'buscadorSimpleId',
                        text: 'Buscador Simple'

                    },'-',{
                        xtype: 'button',
                        id: 'clickDireccionId',
                        text: 'Evento Click'

                    },'-',{
                        xtype: 'button',
                        id: 'recorridoId',
                        text: 'Recorridos'

                    }]
                }

                ]
            });
        });

    }
});
