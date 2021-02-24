(function () {
    angular.module('app', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    template: '<h1>Hello et bienvenue sur ma boutique {{name}}</h1>'
                })
                .when('/produits', {
                    templateUrl: 'vues/produits.html',
                    controller: 'produitsCtrl',
                    controllerAs: 'prods'
                })
                .when('/produit', { redirectTo: '/produits' })
                //edition
                .when('/produits/edit/:idproduit', {
                    templateUrl: 'vues/produit-form.html',
                    controller: 'produitCtrl',
                    controllerAs: 'prod'
                })
                .when('/produits/:idproduit', {
                    templateUrl: 'vues/produit.html',
                    controller: 'produitCtrl',
                    controllerAs: 'prod'
                })
                .when('/produit/:idproduit', { redirectTo: '/produits/:idproduit' })
                .otherwise({ redirectTo: '/home' });
        }]);
})();