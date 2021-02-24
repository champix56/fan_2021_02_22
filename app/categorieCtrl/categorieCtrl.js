(function () {
    'use strict';

    angular
        .module('app')
        .controller('categorieCtrl', ControllerController);

    ControllerController.$inject = ['produitsSrvc'];
    function ControllerController(prdSrvc) {
        var vm = this;
        this.categories = prdSrvc.categories;
    }
})();