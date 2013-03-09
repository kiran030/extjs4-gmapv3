Ext.define('AM.view.Recorrido' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.recorrido',
    title: 'Mapa Buscar Por Punto',
    frame: true,
    autoScroll: true,
    items: [
        {
            xtype: 'container',
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
                    title: 'Buscar Recorridos',
                    items: [
                    {
                        xtype: 'textfield',
                        name: 'origen',
                        fieldLabel: 'Origen'
                    },
                    {
                        xtype: 'textfield',
                        name: 'destino',
                        fieldLabel: 'Destino'
                    },
                    {
                        xtype: 'combo',
                        name: 'tviaje',
                        fieldLabel: 'Tipo de Viaje',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['name', 'value'],
                            data: [
                                {name : 'Caminando',  value: 'WALKING'},
                                {name : 'Automovil',  value: 'DRIVING'},
                                {name : 'Bicicleta',  value: 'BICYCLING'}
                            ]
                        }),
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'value'
                    },
                    {
                        xtype: 'button',
                        id: 'verId',
                        text: 'Ver!'
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
                },
                {
                    xtype: 'fieldset',
                    title: 'Ruta',
                    height: 250,
                    width: 600,
                    layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                    items: [
                    {
                        xtype: 'container', 
                        flex: 1,             
                        layout: 'fit', 
                        autoScroll: true, 
                        items: [{
                            xtype: 'panel',
                            autoScroll: true,
                            id: 'panelRutaPrincipalId',
                            html: '<div id="panelRutaId" style="width:100%; height:100%"></div>'

                        }
                        ] 
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