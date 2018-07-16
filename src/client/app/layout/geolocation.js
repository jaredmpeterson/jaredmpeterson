(function () {
  'use strict';

  angular
    .module('layout')
    .factory('geolocationService', geolocationService);

  geolocationService.$inject = [];

  function geolocationService() {
    var service = {
      getLocation: getLocation
    };

    return service;

    ////////////////
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          // return position.coords;
          console.log("geolocationService", position.coords);
        });
      }
    }
  }
})();
