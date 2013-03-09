Ext.define('AM.view.Puntos' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.puntos',

    title: 'Mapa Puntos',

    html: '<div id="map_canvas" style="width:100%; height:100%"></div>',
    listeners: {
            'afterrender': function(view) {
                var me = this;
                var mapOptions = {
                  zoom: 10,
                  panControl : true, //rows arriba izquierda
                  center: new google.maps.LatLng(-33.9, 151.2),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                me.map = new google.maps.Map(document.getElementById('map_canvas'),
                                              mapOptions);

                var beaches = [
                    ['Bondi Beach', -33.890542, 151.274856, 4],
                    ['Coogee Beach', -33.923036, 151.259052, 5],
                    ['Cronulla Beach', -35.028249, 151.157507, 3],
                    ['Manly Beach', -34.80010128657071, 151.28747820854187, 2],
                    ['Maroubra Beach', -33.950198, 151.259302, 1]
                ];

                me.setMarkers(me.map, beaches);
            }
    },
    setMarkers: function(map, locations){
        //marker
        var image = new google.maps.MarkerImage('images/chicken.png',
            new google.maps.Size(20, 32),
            new google.maps.Point(0,0),
            new google.maps.Point(0, 32));

        //poligono
        var flightPlanCoordinates = [
          new google.maps.LatLng(-33.890542, 151.274856),
          new google.maps.LatLng(-33.923036, 151.259052),
          new google.maps.LatLng(-34.80010128657071, 151.28747820854187),
          new google.maps.LatLng(-35.028249, 151.157507)
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(map);

        for (var i = 0; i < locations.length; i++) {
          var beach = locations[i];
          var myLatLng = new google.maps.LatLng(beach[1], beach[2]);

          var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: beach[0]          
          });
                  
        }

    },
    initComponent: function() {
        console.log('Puntos');        
        this.callParent(arguments);
    }
});