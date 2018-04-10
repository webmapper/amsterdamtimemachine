var L = require('leaflet');
require('leaflet_css');
require('leaflet-hash');
require('./../styles/app.css');

var bglayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartgrijs/EPSG:3857/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: 'Referentiekaart: <a href="https://www.kadaster.nl/">Kadaster</a>'
});

var loman = new L.TileLayer('http://t{s}.maps.geocoders.nl/dgg/og06mu2w/{z}/{x}/{y}.jpeg', {
    attribution: 'Loman',
    subdomains: '1234',
    minZoom: 12,
    maxZoom: 20,
});

var debroen = new L.TileLayer('http://t{s}.maps.geocoders.nl/dgg/d7bcno4e/{z}/{x}/{y}.png', {
    attribution: 'Gerred De Broen',
    subdomains: '1234',
    minZoom: 14,
    maxZoom: 19,
});

var berckenrode = new L.TileLayer('http://t{s}.maps.geocoders.nl/dgg/uibzebxa/{z}/{x}/{y}.png', {
    attribution: 'Berckenrode',
    subdomains: '1234',
    minZoom: 14,
    maxZoom: 19,
});

var layer1909 = L.tileLayer('https://vt1.maps.geocoders.nl/atm-tiles/pw_1909_EPSG3857/{z}/{x}/{y}.png',{
    minZoom: 12,
    maxZoom: 21
});

var layer1985 = L.tileLayer('https://vt1.maps.geocoders.nl/atm-tiles/pw_1985_EPSG3857/{z}/{x}/{y}.png', {
  minZoom: 12,
  maxZoom: 21
});

var layer1943 = L.tileLayer('https://vt1.maps.geocoders.nl/atm-tiles/pw_1943_EPSG3857/{z}/{x}/{y}.png', {
  minZoom: 12,
  maxZoom: 21
});

var baseLayers = {
  "Referentiekaart": bglayer,
};

var overlays = {
  "De Broen" : debroen,
  "Berckenrode": berckenrode,
  "Loman" : loman,
  "Publieke Werken 1909": layer1909,
  "Publieke Werken 1943": layer1943,
  "Pulbieke Werken 1985": layer1985
};

var map = L.map('map-canvas', {
  scrollWheelZoom: false,
  layers: [bglayer,loman]
});
map.attributionControl.setPrefix('');

map.setView([52.3719, 4.9012], 15);

L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(map);

var hash = new L.Hash(map);