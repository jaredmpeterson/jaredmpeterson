(function() {
'use strict';

  angular
    .module('layout')
    .controller('MenubarController', MenubarController);

  MenubarController.$inject = ['$scope'];
  function MenubarController($scope) {
    var vm = this;
    vm.title = 'Menubar';
    
  // vm.time = moment().format("ddd MMM Do h:mm A");
  var dandt = document.getElementById('dandt');
  // document.getElementById('dandt').innerHTML=today;
  function updateClock(clock) {
    clock.innerHTML = moment().format('ddd MMM Do h:mm:ss A');
  }

  setInterval(function () {
    updateClock(dandt);
  }, 1000);

    activate();

    ////////////////

    function activate() { }
  }
})();
