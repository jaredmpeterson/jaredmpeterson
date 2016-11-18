(function() {
'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('layout')
    .component('dock', {
      templateUrl: '/app/layout/dock.html',
      controller: DockController,
      bindings: {
        Binding: '=',
      },
    });

  DockController.$inject = [''];
  function DockController() {
    var $ctrl = this;
    

    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestory = function() { };
  }
})();
