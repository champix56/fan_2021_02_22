(function () {
    'use strict';

    angular
        .module('app')
        .controller('produitsCtrl', ProduitController);

    ProduitController.$inject = ['$http'];
    function ProduitController($http) {
        var vm = this;
        this.produits = [
            { id: 0, nom: 'beurre doux normand', description: 'beurre sans sel pas bon', img: '' },
            { id: 1, nom: 'beurre Breton salé 5%', description: 'le meilleur', img: '' }
        ]

        activate();

        ////////////////

        function activate() {
            $http({
                url: 'http://localhost:5629/produits?_expand=categorie&_sort=categorieId',
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(
                    function (response) {
                        vm.produits = response.data;
                        console.log('%c%s','font-size:32pt; color: green;font-weight:900','produits chargés dans le ctrl');
                        console.log(vm.produits);
                    },
                    function (response) {
                        console.log('Produits REST fail:' + response.satus)
                    }
                );
        }
    }
})();