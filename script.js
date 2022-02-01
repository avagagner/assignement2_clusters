var mymap = L.map('mapid').setView([38.63775922635261, -90.28368046396037], 13);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(mymap);

var marker = L.marker([38.63672876590212, -90.24674730564345]).addTo(mymap);

var marker2 = L.marker([38.63816176328897, -90.25104626536422]).addTo(mymap);

var marker3 = L.marker([38.661539699331904, -90.30894447950988]).addTo(mymap);

var marker4 = L.marker([38.61714841986633, -90.27511168787689]).addTo(mymap);

var marker5 = L.marker([38.64751484426265, -90.2744901289432]).addTo(mymap);



marker.bindPopup("<b>Scottish Arms</b>.").openPopup();
marker2.bindPopup("<b>Scarlett's Wine Bar</b>.").openPopup();
marker3.bindPopup("<b>Mi Ranchito</b>.").openPopup();
marker4.bindPopup("<b>Lorenzo's Trattoria</b>.").openPopup();
marker4.bindPopup("<b>2Shae Cafe</b>.").openPopup();
