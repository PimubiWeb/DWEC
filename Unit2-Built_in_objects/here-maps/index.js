var platform = new H.service.Platform({
    'apikey': 'pZ1pVYXHSAsx5Y21Y9Gek65enB4_l6_sYcKpaducvr0'
  });

function success(pos) {
    var crd = pos.coords;

    // configure an OMV service to use the `core` enpoint
    var omvService = platform.getOMVService({path:  'v2/vectortiles/core/mc'});
    var baseUrl = 'https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/';

    // create a Japan specific style
    var style = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

    // instantiate provider and layer for the basemap
    var omvProvider = new H.service.omv.Provider(omvService, style);
    var omvlayer = new H.map.layer.TileLayer(omvProvider, {max: 22});

    // instantiate (and display) a map:
    var map = new H.Map(
    document.getElementById('mapContainer'),
    omvlayer,
    {
    zoom: 17,
    center: {lat: 35.68026, lng: 139.76744}
    }); 
  };

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

navigator.geolocation.getCurrentPosition(success, error)


