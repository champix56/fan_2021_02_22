(function() {
    'use strict';

    angular
        .module('app')
        .directive('monPanier', Directive);

    Directive.$inject = ['produitsSrvc'];
    function Directive(prdSrvc) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'cart',
            link: link,
            restrict: 'EAC',
            scope: {
            },
            templateUrl:'app/panierDirective/panierDirective.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    ControllerController.$inject = ['produitsSrvc'];

    function ControllerController (prodSrvc) {
        this.panier=prodSrvc.panier;
        this.totaux=prodSrvc.totaux;
    }
})();