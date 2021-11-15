//Add a point, line, and polygon

require(["esri/config",
"esri/Map",
"esri/views/MapView",

//add the Graphic and GraphicsLayer modules.
"esri/Graphic",
"esri/layers/GraphicsLayer"

    ], function (esriConfig,Map, MapView, Graphic, GraphicsLayer) {
    
    //API KEY
    esriConfig.apiKey = "AAPK99245525ab9c429789f145ad948c9387jSOQdr5zcokPF0bmHx75fnZPZ4l39JYhvVD5HCE_PMRX0ldPY-JwbJlUHhT7W-ug";
    
    //Creating a map
    const map = new Map({
    basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
    map: map,
    center: [-3.616369, 37.192342], // Longitude, latitude
    zoom: 18, // Zoom level
    container: "viewDiv" // Div element
    });

    //Add a graphic layer
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    
    //Create a point and simpleMarkerSymbol that will be used to create a Graphic
    const point = { //Create a point
        type: "point",
        longitude: -3.616089,
        latitude: 37.192165,
    };
    const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],  // Orange
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
    };

    const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });
    graphicsLayer.add(pointGraphic);

    // Create a line geometry
    const polyline = {
        type: "polyline",
        paths: [
            [-3.616917, 37.191566], //Longitude, latitude
            [-3.617821, 37.192297], //Longitude, latitude
            [-3.616066, 37.192164]  //Longitude, latitude
        ]
    };
    const simpleLineSymbol = {
        type: "simple-line",
        color: [226, 119, 40], // Orange
        width: 2
    };

    const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol
    });
    graphicsLayer.add(polylineGraphic);

        // Create a polygon geometry
    const polygon = {
        type: "polygon",
        rings: [
            [-3.616917, 37.191566], //Longitude, latitude
            [-3.617821, 37.192297], //Longitude, latitude
            [-3.616812, 37.193006], //Longitude, latitude
            [-3.616066, 37.192164],   //Longitude, latitude
        ]
    };

    const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8],  // Orange, opacity 80%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
    };

    const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
    }
    const attributes = {
        Name: "IES Francisco Ayala",
        Description: "El mejor centro de grado superior de Desarrollo de aplicaciones Webs. Jose i lov u."
    }

    const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,

    attributes: attributes,
    popupTemplate: popupTemplate

});
graphicsLayer.add(polygonGraphic);


    
});