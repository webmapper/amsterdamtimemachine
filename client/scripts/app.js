var L = require('leaflet');
require('leaflet_css');
import './../styles/app.css';

var map = L.map('map-canvas', {
  scrollWheelZoom: false
});
 
map.setView([5.5, 52], 11);
 
var attribution = 'Kadaster';
 
var tiles = 'https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartgrijs/EPSG:3857/{z}/{x}/{y}.png';
 
var layer = L.tileLayer(tiles, {
  maxZoom: 18,
  attribution: attribution
});
 
layer.addTo(map);
