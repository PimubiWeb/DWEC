var platform = new H.service.Platform({
    'apikey': 'f-eo-t-fcg42_gA9R6HjcwIBnJDIPXmpjKhdxNczbUo'
  });

function success(pos){
  var crd = pos.coords;
  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: crd.latitude, lng: crd.longitude}
      });
}

navigator.geolocation.getCurrentPosition(success);