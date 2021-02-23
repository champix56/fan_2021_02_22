(function(){
    angular.module('app')
        .controller('produitCtrl',['$scope',
            function($scope){
                //le corp fonctionnel du controller
                //model + actions
                this.id=0;
                this.nom='Coca cola 1.5';
                this.description='Fantastique boisson médicinnal historiquement issue de feuilles de Coca';
                this.prix=2.54;
                this.stock=10;
                this.categorie={id:0,name:'boisson'},
                this.img='img/produits/coca.png'
            }
        ])
})();