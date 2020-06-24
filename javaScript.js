mapboxgl.accessToken = 'pk.eyJ1IjoiZGFtbGFjYXkiLCJhIjoiY2s4MDJjdnY5MGF3ejNubXdhenJkZXgyMCJ9.iQX8Nwg4ymuoJfNH0cLSkg'; // replace this with your access token
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/damlacay/ck802f21y1ih41iqw6zhjmgt1', // replace this with your style URL
      center: [17.002676, 47.727346],
      zoom: 3.5
    });
    // code from the next step will go here
    map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['initiative passports'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }
  var feature = features[0];

  var icon = feature.properties.passport + ".svg";

  var dummy = "<img class = 'popUp_img' src=" + icon + ">";

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.stakeholderName + '</h3><p>' + feature.properties.address + '</p>' + dummy)
    .addTo(map);
});

function toggleLegend() {
  document.getElementById("legend").classList.toggle("active");
}