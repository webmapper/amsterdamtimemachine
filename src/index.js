var L = require('leaflet');
require('leaflet_css');
require('leaflet-hash');
require('./styles/app.css');

var bglayer = L.tileLayer('https://t{s}.data.amsterdam.nl/topo_wm/{z}/{x}/{y}.png', {
  subdomains: '1234',
  minZoom: 11,
  maxZoom: 21,
  attribution: 'Kaartgegevens: <a href="https://www.kadaster.nl/">Kadaster</a>, cartografie: <a href="https://www.webmapper.net/">Webmapper</a>'
});

var loman = new L.TileLayer('https://images.huygens.knaw.nl/webmapper/maps/loman/{z}/{x}/{y}.jpeg', {
    attribution: 'Loman',
    subdomains: '1234',
    minZoom: 12,
    maxZoom: 20,
});

var debroen = new L.TileLayer('https://images.huygens.knaw.nl/webmapper/maps/debroen/{z}/{x}/{y}.png', {
    attribution: 'Gerred De Broen',
    subdomains: '1234',
    minZoom: 14,
    maxZoom: 19,
});

var berckenrode = new L.TileLayer('https://images.huygens.knaw.nl/webmapper/maps/berckenrode/{z}/{x}/{y}.png', {
    attribution: 'Berckenrode',
    subdomains: '1234',
    minZoom: 14,
    maxZoom: 19,
});

var layer1909 = L.tileLayer('https://images.huygens.knaw.nl/webmapper/maps/pw-1909/{z}/{x}/{y}.png',{
    minZoom: 12,
    maxZoom: 21
});

var layer1985 = L.tileLayer('https://images.huygens.knaw.nl/webmapper/maps/pw-1985/{z}/{x}/{y}.png', {
  minZoom: 12,
  maxZoom: 21
});

var layer1943 = L.tileLayer('https://images.huygens.knaw.nl/webmapper/maps/pw-1943/{z}/{x}/{y}.png', {
  minZoom: 12,
  maxZoom: 21
});

var baseLayers = {
  "A'dam": bglayer,
};

var overlays = {
  "1625": berckenrode,
  "1724" : debroen,
  "1876" : loman,
  "1909": layer1909,
  "1943": layer1943,
  "1985": layer1985
};

var map = L.map('map-canvas', {
  scrollWheelZoom: false,
  layers: [bglayer,loman]
});
map.attributionControl.setPrefix('');

map.setView([52.36908,4.89353], 16);

L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(map);

var hash = new L.Hash(map);
