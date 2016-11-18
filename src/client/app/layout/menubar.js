(function() {
'use strict';

  angular
    .module('layout')
    .controller('MenubarController', MenubarController);

  MenubarController.$inject = ['dependency1'];
  function MenubarController(dependency1) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { }
  }
})();
