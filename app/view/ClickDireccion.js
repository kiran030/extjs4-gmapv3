Ext.define('AM.view.ClickDireccion' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.clickdireccion',
    title: 'Mapa Buscar al hacer click',
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
                id: 'formClickBuscarId',
                frame: true,
                border: false,
                flex: 1,
                items: [
                {
                    xtype: 'fieldset',
                    title: 'Datos',
                    items: [
                    {
                        xtype: 'textfield',
                        name: 'latitud',
                        id: 'latitudId',
                        fieldLabel: 'Latitud'
                    },
                    {
                        xtype: 'textfield',
                        name: 'longitud',
                        id: 'longitudId',
                        fieldLabel: 'Longitud'
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
            me.fireEvent('geoListenerClick', me);

        }
    },
    initComponent: function() {
        console.log('Inicio');        
        this.callParent(arguments);
    }
});