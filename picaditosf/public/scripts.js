$(document).ready(function() {
    $('.carousel').carousel({interval:2500});
});

var map;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 4.624, lng: -74.063},
  zoom: 8
});
}

window.onload = function(){
    initMap();
}