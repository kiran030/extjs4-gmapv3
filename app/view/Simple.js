Ext.define('AM.view.Simple' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.simplemap',

    title: 'Mapa Simple',

    html: '<div id="map_canvas" style="width:100%; height:100%"></div>',
    listeners: {
            'afterrender': function(view) {
                var mapOptions = {
                  center: new google.maps.LatLng(-34.397, 150.644),
                  zoom: 10,
                  panControl : true,
                  mapTypeId: google.maps.MapTypeId.ROADMAP //ROADMAP - SATELLITE - HYBRID - TERRAIN
                };
                var map = new google.maps.Map(document.getElementById("map_canvas"),
                    mapOptions);
            }
    },
    initComponent: function() {
        console.log('Inicio');        
        this.callParent(arguments);
    }
});