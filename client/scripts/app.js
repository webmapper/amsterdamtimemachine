var L = require('leaflet');

var map = L.map('map', {
  scrollWheelZoom: false
});
 
// set the position and zoom level of the map
map.setView([47.63, -122.32], 11);
 
// set an attribution string
var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';
 
// set the tiles the map will use
var tiles = 'https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartgrijs/EPSG:3857/{z}/{x}/{y}.png';
 
// create a tileLayer with the tiles, attribution
var layer = L.tileLayer(tiles, {
  maxZoom: 18,
  attribution: attribution
});
 
// add the tile layer to the map
layer.addTo(map);
