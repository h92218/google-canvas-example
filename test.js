var map, clusterMarkerGroup, markerList, mapCircle;

var lat = 33.385843;
var lon = 126.546183;


var googleCanvas = L.tileLayer(
  "http://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    attribution: "Google Layer Version",
    maxZoom: 22,
  }
);


var Icon1 = L.icon({
  iconUrl: "marker-blue.png",
  popupAnchor: [10, -7],
  iconSize: [15,15],
});

var Icon2 = L.icon({
  iconUrl: "marker-gold.png",
  popupAnchor: [10, -7],
  iconSize: [15,15],
});

var Icon3 = L.icon({
  iconUrl: "marker-green.png",
  popupAnchor: [10, -7],
  iconSize: [15,15],
});
var Icon4 = L.icon({
  iconUrl: "marker-red.png",
  popupAnchor: [10, -7],
  iconSize: [12,12],
});
var Icon5 = L.icon({
  iconUrl: "marker-orange.png",
  popupAnchor: [10, -7],
  iconSize: [12,12],
});
var Icon6 = L.icon({
  iconUrl: "marker-purple.png",
  popupAnchor: [10, -7],
  iconSize: [12,12],
});

var Icon7 = L.icon({
  iconUrl: "marker-pink.png",
  popupAnchor: [10, -7],
  iconSize: [12,12],
});



function initMap() {

  var baseLayers = {
    "구글 Layer": googleCanvas,
  };

  map = L.map("mymap", { layers: [googleCanvas], maxZoom: 22 }).setView(
    [lat, lon],
    11
  );

  for(let i=0;i<datas.length;i++){
    makeMarker(datas[i]);
  }


    var layerControl = L.control.layers(baseLayers);
    layerControl.addTo(map);
}




function makeMarker(data){
if(data.type=="농업기술원"){
 L.marker([data.lat, data.lon], { icon: Icon1 })
    .bindTooltip(data.type)
    .addTo(map);
}

if(data.type=="재난대응과"){
 L.marker([data.lat, data.lon], { icon: Icon2 })
   .bindTooltip(data.type)
   .addTo(map);
}

if(data.type=="kweather"){
  L.marker([data.lat, data.lon], { icon: Icon3 })
     .bindTooltip(data.type)
     .addTo(map);
 }

 if(data.type=="기상청"){
    L.marker([data.lat, data.lon], { icon: Icon4 })
        .bindTooltip(data.type)
        .addTo(map);
 }

 if(data.type=="농촌진흥청"){
  L.marker([data.lat, data.lon], { icon: Icon5 })
         .bindTooltip(data.type)
         .addTo(map);
 }

 if(data.type=="제주(94개소)"){
    L.marker([data.lat, data.lon], { icon: Icon6 })
             .bindTooltip(data.type)
             .addTo(map);
 }

 if(data.type=="산림청"){
      L.marker([data.lat, data.lon], { icon: Icon7})
               .bindTooltip(data.type)
               .addTo(map);
 }

}

initMap();
