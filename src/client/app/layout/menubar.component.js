(function() {
'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('layout')
    .component('menubar', {
      templateUrl: '/app/layout/menubar.html',
      controller: MenubarController,
      bindings: {
        Binding: '=',
      },
    });

  MenubarController.$inject = ['dependency1'];
  function MenubarController(dependency1) {
    var $ctrl = this;
    

    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestory = function() { };
  }
})();
