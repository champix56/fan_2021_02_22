(function () {
    'use strict';

    angular
        .module('app')
        .service('produitsSrvc', Service);

    Service.$inject = ['$http','$routeParams'];
    function Service($http,$routeParams) {
        var vm = this;
        this.produits = [];
        this.produit = {};
        this.produitEmpty={empty:true};
        this.categories = [];
        this.panier=[];
        this.totaux={total:0};

        this.addCart=function(produit){
            var pr=vm.panier.find(e=>produit.id===e.id)
            if(undefined===pr){produit.quant=1;vm.panier.push(produit);}
            else{pr.quant++;}
            vm.totaux.total+=produit.prix;
        }
        this.selectProductToView = function (produit) {
            console.log('un produit a ete selectionne' ,produit);
            console.log(this,vm);
            //impossible car dereferencement du conteneur objet partage par le service
            //vm.produit=produit;
            Object.assign(vm.produit,produit);
            //passage par un champ d'un objet avec une reference FIXE !important
            //je peux que changer(affecter) les contenus des objets JAMAIS LES OBJETS PARATAGES
            vm.produitEmpty.empty=false;
            //vm.produitEmpty=false;
        }
        this.saveProduct=function () {
            $http({url:'http://localhost:5629/produits'+(undefined===vm.produit.id?'':'/'+vm.produit.id),
                        method:(undefined===vm.produit.id?'POST':'PUT'),
                        headers:{
                            'Content-Type': 'application/json'
                          },
                          data:
                              {
                                  id:vm.produit.id,
                                  nom:vm.produit.nom,
                                  description:vm.produit.description,
                                  prix:vm.produit.prix,
                                  stock:vm.produit.stock,
                                  categorieId:vm.produit.categorieId,
                                  img:vm.produit.img
                              }
                    }).then(function (reponse) {
                        var o_i=vm.produits.findIndex(function (elem) {
                                return elem.id==reponse.data.id;
                        });
                        //reafectation de la categorie non recu lors du retour du PUT http
                        reponse.data.categorie=vm.categories.find(function (elem) {
                                return elem.id==reponse.data.categorieId;
                        });
                        
                        vm.produits[o_i]=reponse.data;

                        
                        console.log(vm.produits[o_i]);
                        alert('Put efféctué'+JSON.stringify(reponse.data));
                    },
                    function (reponse) {
                        alert('Put echoué:'+reponse.status);
                     })
        }
        function activate () {
            loadHttpCategories();
            loadHttpProducts();
        }
        function loadHttpCategories() {
            $http.get('http://localhost:5629/categories', { headers: { 'Accept': 'application/json' } }).then(
                function (response) {
                    vm.categories.slice(0);
                    response.data.map(function(eleme,index){
                        vm.categories.push(eleme);
                    });
                    console.log(vm.categories)
                }
            );
        }
        function loadHttpProducts() {
            console.log('start loading products');
            $http({
                url: 'http://localhost:5629/produits?_expand=categorie&_sort=categorieId',
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(
                    function (response) {
                      //impossible car perte de reference de l'adresse du tableau contenant
                       // vm.produits = response.data;
                       //vidange puis remplissage un a un du contenu
                       vm.produits.slice(0);
                       response.data.map(function(eleme,index){
                           vm.produits.push(eleme);
                       });
                        console.log('%c%s', 'font-size:32pt; color: green;font-weight:900', 'produits chargés dans le ctrl');
                        console.log(vm.produits);
                        if(undefined!==$routeParams.idproduit){
                            //si un id de produit est fixé sur la route
                            //je recherche l'element
                            var prodToShow=vm.produits.find(function(elem){
                                //attention les route params sont tjrs des strings
                                return $routeParams.idproduit==elem.id;
                            });
                            //si qqch a ete trouvé dans ma liste avec le bon ID
                            if(undefined!==prodToShow)
                            {
                                //je fusionne l'objet partager avec ce que j'ai trouver
                                Object.assign(vm.produit,prodToShow);
                            }
                            // else $location.path('/produits');
                        }
                    },
                    function (response) {
                        console.log('Produits REST fail:' + response.satus)
                    }
                );
        }
        activate();
  
    }//fin declaration service
}//fin self executed function
)();