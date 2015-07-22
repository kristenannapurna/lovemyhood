  var app = {};

  app.loadMap = function() {

    var mapStyleBW = [{
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "weight": 1
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "weight": 0.8
      }]
    }, {
      "featureType": "landscape",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "water",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }];

    var mapOptions = {
      center: {
        lat: 43.64944,
        lng: -79.42910
      },
      zoom: 16,
      styles: mapStyleBW,
      scrollwheel: false
    }

      //target the map div and store in a variable
      var mapDiv = document.querySelector('.map');
      //create a new google map which takes the location and the options 
      app.map = new google.maps.Map(mapDiv, mapOptions);

  } //end of load map function

   //this is an array of markers that can be looped through to filter by category
   app.markers = [];


   app.loadMarkers = function() {
    var icons = {
      cafe: 'img/cafe.svg',
      shopping: 'img/shopping.svg',
      restaurant: 'img/restaurant.svg',
      bar: 'img/bar.svg',
      specialty: 'img/specialty.svg'
    }

      //function that creates new markers
      //markerData contains lat, lng, icon, venueName, venueType, address, website
      function Marker(markerData){
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(markerData.lat, markerData.lng),
          map: app.map,
          icon: icons[markerData.venueType]
        });


        var markerInfo = new google.maps.InfoWindow();
        //listen for a click on the previous marker 
        google.maps.event.addListener(marker, 'click', function() {
          markerInfo.setContent('<div>'+ markerData.venueName +'</br>'+ markerData.address+'</div>');
          markerInfo.open(app.map, this);
        });

        //add markertype category property for sorting later 
        marker.markerType = markerData.venueType;
        marker.markerName = markerData.venueName;
        marker.markerAddress = markerData.address;
        marker.markerWebsite = markerData.website;
        //add each marker to the array of markers
        app.markers.push(marker);

      }

      //BIVY
      new Marker({
        lat: 43.649907,
        lng: -79.434677,
        venueName: 'Bivy',
        venueType: 'cafe',
        address: '1600 Dundas St W, Toronto',
        website: 'http://bivy.ca/'
      });

      // FULL OF BEANS
      new Marker({
        lat: 43.64961,
        lng: -79.42733,
        venueName: 'Full Of Beans',
        venueType: 'cafe',
        address: '1348 Dundas St West, Toronto',
        website: 'http://fullofbeans.ca/'
      });

      //TUCANA COFFEE
      new Marker({
        lat: 43.64944,
        lng: -79.42910,
        venueName: 'Tucana Coffee',
        venueType: 'cafe',
        address: '1413 Dundas St W Toronto',
        website: 'http://www.tucanacoffee.com/'
      });

      //EASY TIGER GOODS
      new Marker({
        lat: 43.64944,
        lng: -79.43029,
        venueName: 'Easy Tiger Goods',
        venueType: 'shopping',
        address: '1447 Dundas Street W Toronto',
        website: 'http://easytigergoods.com/'
      });

     //BEADLE
     new Marker({
      lat: 43.6498977,
      lng: -79.4345314,
      venueName: 'Beadle',
      venueType: 'shopping',
      address: '1582 Dundas St W Toronto',
      website: 'http://www.beadlestore.com/'
    });

     //CBP

     new Marker({
      lat: 43.6500013,
      lng: -79.4347525,
      venueName: 'Cafe Bar Pasta',
      venueType: 'restaurant',
      address: '1588 Dundas Street West, Toronto',
      website: 'http://www.cafe-bar-pasta.com/'
    });

     //MIDFIELD
     new Marker({
      lat: 43.6497791,
      lng: -79.4300217,
      venueName: 'Midfield Wine Bar & Tavern',
      venueType: 'bar',
      address: '1434 Dundas Street West, Toronto',
      website: 'http://midfieldwinebar.com/'
    });

     //NOBLE HOP
     new Marker({
      lat: 43.6495773,
      lng: -79.4338546,
      venueName: 'Noble Hop Home Brewing Supplies',
      venueType: 'specialty',
      address: '1567 Dundas St W Toronto',
      website: 'http://www.noblehop.com/'
    });

     //WALLFLOWER
     new Marker({
      lat: 43.6497841,
      lng: -79.4370207,
      venueName: 'Wallflower',
      venueType: 'bar',
      address: '1665 Dundas St W, Toronto',
      website: 'https://www.facebook.com/WallflowerTO'
    });

     //PHO PHUONG
     new Marker({
      lat: 43.6501351,
      lng: -79.4345916,
      venueName: 'Pho Phuong',
      venueType: 'restaurant',
      address: '1603 Dundas St W, Toronto',
      website: 'https://plus.google.com/112610867892016435922/about?gl=us&hl=en'
    });

     //BIKES ON WHEELS
     new Marker({
      lat: 43.6500449,
      lng: -79.4354841,
      venueName: 'Bikes On Wheels',
      venueType: 'shopping',
      address: '1612 Dundas St W, Toronto',
      website: 'http://www.bikesonwheels.com/'
    });

     //ATLANTIC
     new Marker({
      lat: 43.6498271,
      lng: -79.4347083,
      venueName: 'Atlantic',
      venueType: 'restaurant',
      address: '1597 Dundas St W, Toronto',
      website: 'http://www.atlanticondundas.com/'
    });

     //OMG BAKED GOODNESS
     new Marker({
      lat: 43.649856,
      lng: -79.4345101,
      venueName: 'OMG Baked Goodness',
      venueType: 'specialty',
      address: '1561 Dundas St W, Toronto',
      website: 'http://www.omgbakedgoodness.com/'
    });

     //MULTIPLE ORGANICS
     new Marker({
      lat: 43.6497987,
      lng: -79.4334466,
      venueName: 'Multiple Organics',
      venueType: 'specialty',
      address: '1545 Dundas St W, Toronto',
      website: 'http://www.multipleorganics.ca/Home.html'
    });

     //LIFE OF MANEK
     new Marker({
      lat: 43.6497259,
      lng: -79.4325763,
      venueName: 'Life Of Manek',
      venueType: 'shopping',
      address: '1504 Dundas St W, Toronto',
      website: 'http://www.lifeofmanek.com/'
    });

     //BLUE BUTTON SHOP
     new Marker({
      lat: 43.649633,
      lng: -79.4321568,
      venueName: 'Blue Button Shop',
      venueType: 'shopping',
      address: '1499 Dundas St W, Toronto',
      website: 'https://www.bluebuttonshop.com/bluebutton/splash.php'
    });

       //THE HOGTOWN CURE
       new Marker({
        lat: 43.649633,
        lng: -79.4321568,
        venueName: 'The Hogtown Cure',
        venueType: 'restaurant',
        address: '1499 Dundas St W, Toronto',
        website: 'http://www.thehogtowncure.com/'
      });

     //SUKOTHAI
     new Marker({
      lat: 43.6496456,
      lng: -79.4310263,
      venueName: 'Sukothai',
      venueType: 'restaurant',
      address: '1442 Dundas St W, Toronto',
      website: 'http://www.sukhothaifood.ca/index.html'
    });

     //GRAIN CURD AND BEAN
     new Marker({
      lat: 43.6495418,
      lng: -79.4295256,
      venueName: 'Grain Curd and Bean',
      venueType: 'specialty',
      address: '1414 Dundas St W, Toronto',
      website: 'http://graincurdandbean.com/'
    });



   }



   app.displayListings = function(type) {
    //clear the listings div first 
    $('.listings').fadeOut('1000', function(){
      $('.listings').empty();
      var listings = app.markers;
      // console.log(listings);
      //loop through the app.markers[] to check for the venueType property
      $.each(listings, function(i, val){
        var venueName = '<h3>' + listings[i].markerName + '</h3>';
        var venueAddress = '<p>' + listings[i].markerAddress + '</p>';
        var website = '<a class="webLink " href="' + listings[i].markerWebsite + '" target="_blank">Website</a>'
        // console.log(val.markerType);
        if (type === val.markerType){
         $('.listings').append('<div class="venue">' + venueName + venueAddress + website + '</div>');
       } else if (type === 'all'){
        $('.listings').append('<div class="venue">' + venueName + venueAddress + website + '</div>');
      }      

    });
      $('.listings').fadeIn();
    });

  }

  //filter listings based on type


   //if app.marketype = bar show for filtering
   app.filterListings = function(){
    $('.button').on('click', function(e){
      e.preventDefault();
      var type = $(this).data('type');
      app.displayListings(type);
      $.each(app.markers, function(i, val){
        if (type === 'all'){
          app.markers[i].setVisible(true);
        } else if(type === app.markers[i].markerType){
          app.markers[i].setVisible(true);
        } else {
          app.markers[i].setVisible(false);
        }
      });
    });
    //toggle markers visible/invisible based on type clicked 

  }


  $(function() {
    app.loadMap();
    app.loadMarkers();
    app.displayListings('all');
    app.filterListings();
      //fittext plugin
      $('h1').fitText();
    });