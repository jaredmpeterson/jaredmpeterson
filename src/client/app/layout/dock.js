(function() {
'use strict';

  angular
    .module('layout')
    .controller('DockController', DockController);

  DockController.$inject = ['dependency1'];
  function DockController(dependency1) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { }
  }
})();
