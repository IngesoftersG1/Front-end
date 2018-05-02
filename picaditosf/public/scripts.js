const BOGOTA_COOR = {lat: 4.624, lng: -74.063};
const BALLICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAbFBMVEX///8AAAD8/PzKysr19fXk5OTw8PBdXV3V1dXc3NydnZ1ycnIGBgbh4eFCQkK9vb21tbUxMTGrq6tHR0c2NjaRkZE7OztPT08ZGRnp6emJiYkoKCiDg4NqamrExMS7u7ukpKRhYWF6enofHx/rWe9gAAAA3klEQVQokbVR2XKDMAzUGhNfkBpMuEIJSf//HyM7M8FteWw1Y2usY7UrE/2Ple1yOggLH4CFSGkhvmekH/tFbw3QffzsMnw0AC/z6Gnb5ugnpWeuyMdxaXQRyBvrMlrAtSayXew747JnvvDYdAioeIYcYd+JNQwRhsfjbu58t28CiZjgkLLTVDdu3jWVfJpeIT3qnPbgqWCIc1I5leWushmHW9xEUqleEpK1FaqEw6y0Q5WtbkUSscIua48iHxSun6Z4dLHAuTxB2pDkagaVv3bNNvft5ejzSOij6B/ZE5pQCQgxv+/+AAAAAElFTkSuQmCC"

$(document).ready(function() {
    $('.carousel').carousel({interval:2500});
    initMap();
});

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: BOGOTA_COOR,
      zoom: 12
    });
    var marker = new google.maps.Marker({
            position: BOGOTA_COOR,
            map: map,
            title: 'canchas1',
            icon: BALLICON
        }); 
}

function addmarker() {
    // body...
}

window.onload = function(){
    initMap();
}