(function() {
'use strict';

  angular
    .module('layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['dependency1'];
  function LayoutController(dependency1) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { }
  }
})();
