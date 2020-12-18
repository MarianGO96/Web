
     var map, infoWindow;
     var mgLocation = 
     {
         Latitude: 47.023258,
         Longitude: 28.816945
     }

     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: mgLocation.Latitude, lng: mgLocation.Longitude},
         zoom: 14
       });
       
       infoWindow = new google.maps.InfoWindow;

       geoLocate();
   }

   function geoLocate() {

      
       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
           
           infoWindow.setPosition(pos);
           infoWindow.setContent('Tu ești aici!');
           infoWindow.open(map);
           map.setCenter(pos);

           document.getElementById("currentLat").innerHTML = pos.lat;
           document.getElementById("currentLng").innerHTML = pos.lng;
           
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     } 

   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);
    };

    document.getElementById("showMG").onclick = function(){
       var mapPoint = {lat: mgLocation.Latitude, lng: mgLocation.Longitude};
       var map = new google.maps.Map(
       document.getElementById('map'), {zoom: 14, center: mapPoint});
       var marker = new google.maps.Marker({position: mapPoint, map: map
    });


    document.getElementById("showMyLocation").onclick = function(){
        initMap();
    };
    
    document.getElementById("calculateDistance").onclick = function(){
      
      var latitude1 = mgLocation.Latitude;
      var longitude1 = mgLocation.Longitude;
      
      var latitude2 =  document.getElementById("currentLat").innerHTML;
      var longitude2 =  document.getElementById("currentLng").innerHTML;
      var distance = undefined;

      if(latitude2 != null && latitude2 != null){
          distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(latitude1, longitude1)
                                      , new google.maps.LatLng(latitude2, longitude2));
        
        document.getElementById("distanteResult").innerHTML = '<strong>Rezultat : </strong>' +distance + '<strong> Metri </strong>';
       }                                               
    };

};

       