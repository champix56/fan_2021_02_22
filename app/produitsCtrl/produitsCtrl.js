(function () {
    'use strict';

    angular
        .module('app')
        .controller('produitsCtrl', ProduitController);

    ProduitController.$inject = [];
    function ProduitController() {
        var vm = this;
        this.produits=[
            {id:0,nom:'beurre doux normand', description:'beurre sans sel pas bon',img:'' },
            {id:1,nom:'beurre Breton salé 5%', description:'le meilleur',img:'' }
        ]

        activate();

        ////////////////

        function activate() { }
    }
})();