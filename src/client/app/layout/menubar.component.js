(function() {
'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('layout')
    .component('menubar', {
      templateUrl: 'app/layout/menubar.html',
      controller: MenubarController,
      controllerAs: 'Menubar',
      bindings: {
        Binding: '=',
      },
    });

  MenubarController.$inject = [];
  function MenubarController() {
    var $ctrl = this;
    

    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestory = function() { };
  }
})();
