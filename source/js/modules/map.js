const getMap = () => {
  /*
 * Карта
 */

  function initializeMap(){

    var WINDOW_WIDTH = $(window).width(),
      map = $('.js-map'),
      locArray = [],
      infoWindows = [];

    $('.js-map__label').each(function(){
      locArray.push(
        {
          "loc": $(this).data('loc'),
          "content": $(this).parent().get(0).outerHTML
        }
      );
    });

    map.each(function(){
      var map,
        loc = $(this).data('loc').replace(' ', '').split(','),
        position = new google.maps.LatLng(loc[0], loc[1]),
        mapOptions = {
          center: position,
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControl: true,
          disableDefaultUI: true,
          // scrollwheel: false,
          rotateControl: false
        };

      map = new google.maps.Map($(this).get(0), mapOptions);
      map.setTilt(45);

      var latlngbounds = new google.maps.LatLngBounds();

      for(var i = 0; i < locArray.length; i++){

        var loc = locArray[i].loc.replace(' ', '').split(',');
        position = new google.maps.LatLng(loc[0], loc[1]);

        latlngbounds.extend(position);

        var marker = new google.maps.Marker({
          position: position,
          map: map,
          title: '',
          animation: google.maps.Animation.DROP,
          icon: {
            url: $('.js-map').data('pin')
          }
        });

        map.setCenter(position);
        addInfoWindow(marker, locArray[i].content);
      }

      function addInfoWindow(marker, message) {
        var infoWindow = new google.maps.InfoWindow({
          content: '<div class="gm-infowindow">'+ message +'</div>'
        });

        infoWindows.push(infoWindow);

        google.maps.event.addListener(marker, 'click', function () {
          closeAllInfoWindows();
          infoWindow.open(map, marker);
        });

        google.maps.event.addListener(map, 'click', function () {
          closeAllInfoWindows();
        });
      }

      function closeAllInfoWindows(){
        $.each(infoWindows, function(i){
          infoWindows[i].close();
        });
      }

      if(locArray.length > 1){
        map.setCenter(latlngbounds.getCenter(), map.fitBounds(latlngbounds));
      }

      map.setOptions({draggable: WINDOW_WIDTH > 767});

      $(document).on('click', '.js-map__label', function(){
        if(WINDOW_WIDTH > 767){
          var loc = $(this).data('loc').replace(' ', '').split(','),
            mapOffsetTop = ($('.b-map').offset().top - 60);

          $('body, html').animate({
            scrollTop: mapOffsetTop
          }, 500);

          setTimeout(function(){
            map.setCenter(new google.maps.LatLng(loc[0], loc[1]));
            map.setZoom(15);
          }, 500);

          return false;
        }
      });
    });
  }

  function initMap() {
    const WINDOW_WIDTH = $(window).width();
    const mapOffice = document.querySelector('.js-map-office');
    const locArrayOffice = [];
    const infoWindows = [];

    if (mapOffice) {
      const dataMap = JSON.parse(mapOffice.dataset.other);

      dataMap.forEach(function (el) {
        locArrayOffice.push(
          {
            "loc": el.MAP,
            info: {
              "name": el.NAME,
              "address": el.ADDRESS ? el.ADDRESS : '',
              "phone": el.PHONE ? el.PHONE : '',
              "link": el.LINK,
            }
          }
        );
      });
    }

    const map = new google.maps.Map(mapOffice, {
      zoom: 7,
      center: {lat: 45.0293118, lng: 38.959727},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      rotateControl: false
    });

    locArrayOffice.forEach(function (el) {
      const loc = el.loc.replace(' ', '').split(',');
      const position = new google.maps.LatLng(loc[0], loc[1]);

      const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: '',
        animation: google.maps.Animation.DROP,
        icon: {
          url: mapOffice.dataset.pin
        }
      });

      map.setCenter(position);
      addInfoWindow(marker, el.info);
    });

    function addInfoWindow(marker, message) {
      const telArr = Array.from(message.phone);
      const tel = telArr.map((el) => {
        return `<a href="tel:${el}">${el}</a>`
      }).join(',');
      const linkTitle = message.link ? '<b> <a href="' + message.link + '">' + message.name + '</a> </b>' : '<b>' + message.name + '</b>';
      const infoWindow = new google.maps.InfoWindow({
        content: '<div class="gm-infowindow">' + '<div class="map-modal-info">' + linkTitle + '<p>' + message.address + '</p>' + tel.replace(/,/g, '') + '</p>' + '</div>'
      });

      infoWindows.push(infoWindow);

      google.maps.event.addListener(marker, 'click', function () {
        closeAllInfoWindows();
        infoWindow.open(map, marker);
      });

      google.maps.event.addListener(map, 'click', function () {
        closeAllInfoWindows();
      });
    }

    function closeAllInfoWindows(){
      $.each(infoWindows, function(i){
        infoWindows[i].close();
      });
    }

    $(document).on('click', '.js-map__label', function(){
      if(WINDOW_WIDTH > 767){
        var loc = $(this).data('loc').replace(' ', '').split(','),
          mapOffsetTop = ($('.b-map').offset().top - 60);

        $('body, html').animate({
          scrollTop: mapOffsetTop
        }, 500);

        setTimeout(function(){
          map.setCenter(new google.maps.LatLng(loc[0], loc[1]));
          map.setZoom(15);
        }, 500);

        return false;
      }
    });

  }

  $(document).ready(function(){

    if($('body').find('.js-map').length){
      google.maps.event.addDomListener(window, 'load', initializeMap);
    }
    if($('body').find('.js-map-office').length){
      google.maps.event.addDomListener(window, 'load', initMap);
    }
  });
}

export { getMap };
