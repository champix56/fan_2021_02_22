(function () {
    'use strict';

    angular
        .module('app')
        .controller('produitsCtrl', ProduitController);

    ProduitController.$inject = ['$scope','produitsSrvc'];
    function ProduitController($scope,prdsrvc) {
        var vm = this;
        this.produits = prdsrvc.produits;
        $scope.onshowproductclick=prdsrvc.selectProductToView;
    }
})();