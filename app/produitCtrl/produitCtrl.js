(function(){
    angular.module('app')
        .controller('produitCtrl',['$scope','$routeParams','produitsSrvc',
            function($scope,$routeParams,prdSrvc){
                console.log('%c%s','color:tomato;font-size:32pt','voici le contenu des params de route',$routeParams);
                var virtualThis=this;
                //le corp fonctionnel du controller
                //model + actions
                this.produit=prdSrvc.produit;
                this.isEmpty=prdSrvc.produitEmpty;
                // this.id=1;
                // this.nom='Coca cola 1.5';
                // this.description='Fantastique boisson médicinnal historiquement issue de feuilles de Coca';
                // this.prix=2.54;
                // this.stock=10;
                // this.categorieId=0;
                // this.categorie={id:0,name:'boisson'};
                // this.img='img/produits/coca.png';
                
                $scope.onSubmitForm=prdSrvc.saveProduct;
            }
        ])
})();