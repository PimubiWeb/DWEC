   // Initialize the platform object:
   var platform = new H.service.Platform({
    'apikey': 'f-eo-t-fcg42_gA9R6HjcwIBnJDIPXmpjKhdxNczbUo'
  });

  

function success(pos){
        var crd = pos.coords;
      // Obtain the default map types from the platform object
         var maptypes = platform.createDefaultLayers();

     // Instantiate (and display) a map object:
    var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 15,
      center: { lng: crd.longitude, lat:crd.latitude }
    });
  
    marker = new H.map.DomMarker( { lng: crd.longitude, lat:crd.latitude });

// Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);




}
      
      navigator.geolocation.getCurrentPosition(success);