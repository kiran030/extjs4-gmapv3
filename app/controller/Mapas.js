Ext.define('AM.controller.Mapas', {
    extend: 'Ext.app.Controller',

	views: [
		'AM.view.Simple', 
		'AM.view.Puntos', 
		'AM.view.PuntoSimple', 
		'AM.view.InfoWindow',
		'AM.view.BuscadorSimple',
		'AM.view.ClickDireccion',
		'AM.view.Recorrido'
	],
	refs: [
	  {
	    ref:'buscadorSimple',
		selector:'buscadorsimple'
	  },
	  {
	    ref:'clickDireccion',
		selector:'clickdireccion'
	  },
	  {
	    ref:'Recorrido',
		selector:'recorrido'
	  }

	],

    init: function(app) {
        console.log('Initialized!');
		var me = this;
		me.control({
		    'viewport #simpleMapId': {
                click: this.onClickSimpleMap
			},
		    'viewport #puntosId': {
                click: this.onClickPuntos
			},
		    'viewport #puntoSimpleId': {
                click: this.onClickPuntoSimple
			},
		    'viewport #infoWindowId': {
                click: this.onClickInfoWindow
			},
		    'viewport #buscadorSimpleId': {
                click: this.onClickBuscadorSimple
			},
		    'viewport #clickDireccionId': {
                click: this.onClickDireccion
			},
		    'viewport #recorridoId': {
                click: this.onClickRecorrido
			},
		    'buscadorsimple #buscarPorCoordenadaId': {
                click: this.onClickBuscarCoordenada
			},
		    'clickdireccion': {
                geoListenerClick: this.onFireListenerClick
			},
		    'recorrido #verId': {
                click: this.onVerRecorrido
			}


		});
    },
    onClickSimpleMap: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('Simple').create();
        main.add(panel);
    },
    onClickPuntos: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('Puntos').create();
        main.add(panel);
    },
    onClickPuntoSimple: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('PuntoSimple').create();
        main.add(panel);
    },
    onClickInfoWindow: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('InfoWindow').create();
        main.add(panel);
    },
    onClickBuscadorSimple: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('BuscadorSimple').create();
        main.add(panel);
    },
    onClickDireccion: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('ClickDireccion').create();
        main.add(panel);
    },
    onClickRecorrido: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        var panel = this.getView('Recorrido').create();
        main.add(panel);
    },
    onClickBuscarCoordenada: function(){
    	var view = this.getBuscadorSimple();
        var form = view.down('#formBuscarId').getValues();
        var geocoder = new google.maps.Geocoder();

		var latlng = new google.maps.LatLng(form.latitud, form.longitud);

		geocoder.geocode( { 'location': latlng}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				alert(results[0].formatted_address)
				view.map.setCenter(results[0].geometry.location);
				if(view.marker!=null){
					view.marker.setMap(null);
				}
				view.marker = new google.maps.Marker({
				    map: view.map,
				    position: results[0].geometry.location
				});
				view.map.setZoom(14);
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});

    },
    onFireListenerClick: function(){
    	var view = this.getClickDireccion();
        var form = view.down('#formClickBuscarId');

		google.maps.event.addListener(view.map, 'click', function(response) {
			console.log(response);
			var latlng = response.latLng;
			form.down('#latitudId').setValue(latlng.jb);
			form.down('#longitudId').setValue(latlng.ib);
			
			
        });    
	},
	onVerRecorrido: function(){
    	var view = this.getRecorrido();
        var form = view.down('#formBuscarId').getValues();

		
		if(!view.directionsDisplay)
			view.directionsDisplay = new google.maps.DirectionsRenderer();
		else
			view.directionsDisplay.setMap(null);
				
		var directionsService = new google.maps.DirectionsService();


		document.getElementById('panelRutaId').innerHTML = '';

		var request = {
			origin: form.origen,
			destination: form.destino,
			travelMode: google.maps.DirectionsTravelMode[form.tviaje],
			unitSystem: google.maps.DirectionsUnitSystem['METRIC'],
			provideRouteAlternatives: true
		};
		directionsService.route(request, function(response, status) {
		    if (status == google.maps.DirectionsStatus.OK) {
		    	console.log(response)
		    	view.directionsDisplay.setMap(view.map);
		        view.directionsDisplay.setPanel(document.getElementById('panelRutaId'));
		        view.directionsDisplay.setDirections(response);
		        view.down('#panelRutaPrincipalId').doLayout();
		    } else {
		            alert("No existen rutas entre ambos puntos");
		    }
		});
	}

});