var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


var steak_data = [{
    "Name": "Roule Galette Melbourne",
    "Open_Time": "12:00 PM - 3:00 PM 6:00 PM - 9:30 PM",
    "Food": 4.5,
    "Service": 4.5,
    "Value": 4,
    "Atmosphere": 4,
    "Reviews": 492,
    "Rank": 54,
    "TEL": 61396209888,
    "Address": "42-44 King St, Melbourne, Victoria 3000 Australia",
    "Lat": "-37.81895769925172",
    "Long": "144.957289255861958"
  },
  {
    "Name": "The Railway Club Hotel Steakhouse",
    "Open_Time": "11:45 AM - 10:30 PM",
    "Food": 4.5,
    "Service": 4.5,
    "Value": 4,
    "Atmosphere": 4.5,
    "Reviews": 655,
    "Rank": 22,
    "TEL": 61396451661,
    "Address": "107 Raglan St Port Melbourne, Melbourne, Victoria 3207 Australia",
    "Lat": "-37.83359530811508",
    "Long": "144.94432085586243"
  },
  {
    "Name": "Rare Steakhouse Midtown",
    "Open_Time": "12:00 PM - 3:00 PM5:30 PM - 9:30 PM",
    "Food": 4.5,
    "Service": 4,
    "Value": 4,
    "Atmosphere": 4.5,
    "Reviews": 336,
    "Rank": 48,
    "TEL": 61396707317,
    "Address": "12 Goldie Pl, Melbourne, Victoria 3000 Australia12 Goldie Pl, Melbourne, Victoria 3000 Australia",
    "Lat": "-37.81322891315844",
    "Long": "144.9607294423688"
  },
  {
    "Name": "Squires Loft South Yarra",
    "Open_Time": "5:15 PM - 9:00 PM",
    "Food": 4,
    "Service": 4.5,
    "Value": 4.5,
    "Atmosphere": 4,
    "Reviews": 378,
    "Rank": 83,
    "TEL": 61398240999,
    "Address": "166 Toorak Rd, Melbourne, Victoria 3141 Australia",
    "Lat": "-37.839156547962176",
    "Long": "144.99258418469827"
  },
  {
    "Name": "A Hereford Beefstouw",
    "Open_Time": "5:30 PM - 10:30 PM",
    "Food": 4.5,
    "Service": 4.5,
    "Value": 4.5,
    "Atmosphere": 4,
    "Reviews": 186,
    "Rank": 125,
    "TEL": 61396548297,
    "Address": "22 Duckboard Pl, Melbourne, Victoria 3000 Australia",
    "Lat": "-37.81566046944137",
    "Long": "144.97126205401233"
  },
  {
    "Name": "The Meat & Wine Co",
    "Open_Time": "12:00 PM - 10:00 PM",
    "Food": 4.5,
    "Service": 4,
    "Value": 3.5,
    "Atmosphere": 4,
    "Reviews": 1444,
    "Rank": 67,
    "TEL": 61396965333,
    "Address": "3 Freshwater Pl Queensbridge Square, Queensbridge Street, Melbourne, Victoria 3006 Australia",
    "Lat": "-37.821019329171406",
    "Long": " 144.96230511353338"
  }
]
var steak_list = [];
for (var val in steak_data) {
  var steak_item = L.marker([steak_data[val]['Lat'], steak_data[val]['Long']], {
    icon: redIcon
  });
  addAction(steak_item, steak_data[val])
  steak_list.push(steak_item)
}
var steakhouse = L.layerGroup(steak_list);



var streets = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BI5Iw8rqZlofckqwEart', {
  attribution: 'https://api.maptiler.com/maps/streets/256/tiles.json?key=BI5Iw8rqZlofckqwEart'
});
var topo = L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=BI5Iw8rqZlofckqwEart', {
  attribution: 'https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=BI5Iw8rqZlofckqwEart'
});
var bright = L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=BI5Iw8rqZlofckqwEart', {
  attribution: 'https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}.png?key=BI5Iw8rqZlofckqwEart'
});

var food_map = L.map('food-map', {
  center: [-37.813629, 144.963058],
  zoom: 12,
  layers: [topo, steakhouse]
});

var baseMaps = {
  "Streets": streets,
  "Topo": topo,
  "Bright": bright
};
var overlayMaps = {
  "Steakhouse": steakhouse,
  "Brunch ": brunch,
  "Pizza ": pizza,
  "Coffee ": coffee
};




L.control.layers(baseMaps, overlayMaps).addTo(food_map);
