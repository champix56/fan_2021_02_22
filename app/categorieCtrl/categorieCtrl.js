(function() {
    'use strict';

    angular
        .module('app')
        .controller('categorieCtrl', ControllerController);

    ControllerController.$inject = ['$scope','$http'];
    function ControllerController($scope,$http) {
        var vm = this;
        this.categories=[];

        activate();
        console.log(this.categories);
        ////////////////

        function activate() {
            $http({method:'GET',url:'http://localhost:5629/categories'})
                .then(  function success(response){
                            console.log(this,response);
                            vm.categories=response.data;
                            console.log('valeur categories du controller mis a jour\n',vm.categories);
                        },
                        function unsuccess(response){ 
                            console.log('Rest ERROR');
                        }
                    );

         }
    }
})();