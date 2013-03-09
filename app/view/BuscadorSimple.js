Ext.define('AM.view.BuscadorSimple' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.buscadorsimple',
    title: 'Mapa Buscar Por Punto',
    frame: true,
    items: [
        {
            xtype: 'container',
            height: 600,
            layout: {
                type: 'hbox'
            },
            items: [
            {
                xtype: 'form',
                id: 'formBuscarId',
                frame: true,
                border: false,
                flex: 1,
                items: [
                {
                    xtype: 'fieldset',
                    title: 'Buscar Por Coordenadas',
                    items: [
                    {
                        xtype: 'numberfield',
                        name: 'latitud',
                        fieldLabel: 'Latitud'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'longitud',
                        fieldLabel: 'Longitud'
                    },
                    {
                        xtype: 'button',
                        id: 'buscarPorCoordenadaId',
                        text: 'Buscar!'
                    }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Resultado',
                    height: 250,
                    width: 600,
                    items: [
                    {
                        xtype: 'panel',
                        html: '<div id="map_canvas" style="width:100%; height:100%"></div>'
                    }
                    ]
                }

                ]
            }
            ]
        }
    ],
    listeners: {
        'afterrender': function(view) {
            var me = this;
            var mapOptions = {
              zoom: 10,
              panControl : true, //rows arriba izquierda
              center: new google.maps.LatLng(-33.444334,-70.655308),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            me.map = new google.maps.Map(document.getElementById('map_canvas'),
                                          mapOptions);

        }
    },
    initComponent: function() {
        console.log('Inicio');        
        this.callParent(arguments);
    }
});