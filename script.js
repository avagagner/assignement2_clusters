var map = L.map('map').setView([37.75714318563177, -122.44534300595339], 13);

var Stamen_Terrain = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$.getJSON("https://raw.githubusercontent.com/avagagner/assignment_2B_actual/main/sf_crime.geojson",function(data){
    var crimeIcon = L.icon({
      iconUrl: 'https://image.pngaaa.com/118/469118-middle.png',
      iconSize: [40,40]
    });
    var crimes = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: crimeIcon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT + '<br/>' + feature.properties.SUBJECT)
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(crimes);
    map.addLayer(clusters);
});
