Ext.define('AM.view.PuntoSimple' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.puntosimple',

    title: 'Mapa Punto Simple',

    html: '<div id="map_canvas" style="width:100%; height:100%"></div>',
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

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-33.444334,-70.655308),
                    map: me.map                
                });


            }
    },
    initComponent: function() {
        console.log('Inicio');        
        this.callParent(arguments);
    }
});