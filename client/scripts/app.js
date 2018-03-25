var L = require('leaflet');
require('leaflet_css');
require('./../styles/app.css');

var map = L.map('map-canvas', {
  scrollWheelZoom: false
});
map.attributionControl.setPrefix('');
 
map.setView([52.3719, 4.9012], 15);
 
var bglayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartgrijs/EPSG:3857/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: 'Referentiekaart: <a href="https://www.kadaster.nl/">Kadaster</a>'
});
 
bglayer.addTo(map);