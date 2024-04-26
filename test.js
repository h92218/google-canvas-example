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
if(data.type=="type1"){
 L.marker([data.lat, data.lon], { icon: Icon1 })
    .bindTooltip(data.type)
    .addTo(map);
}

if(data.type=="type2"){
 L.marker([data.lat, data.lon], { icon: Icon2 })
   .bindTooltip(data.type)
   .addTo(map);
}

if(data.type=="type3"){
  L.marker([data.lat, data.lon], { icon: Icon3 })
     .bindTooltip(data.type)
     .addTo(map);
 }

 if(data.type=="type4"){
    L.marker([data.lat, data.lon], { icon: Icon4 })
        .bindTooltip(data.type)
        .addTo(map);
 }

 if(data.type=="type5"){
  L.marker([data.lat, data.lon], { icon: Icon5 })
         .bindTooltip(data.type)
         .addTo(map);
 }

 if(data.type=="type6"){
    L.marker([data.lat, data.lon], { icon: Icon6 })
             .bindTooltip(data.type)
             .addTo(map);
 }

 if(data.type=="type7"){
      L.marker([data.lat, data.lon], { icon: Icon7})
               .bindTooltip(data.type)
               .addTo(map);
 }

}

initMap();
