(function() {
    'use strict';

    angular
        .module('app')
        .filter('myCurrency', DeclarationDuFilter);

    function DeclarationDuFilter() {
        return ExecutantDuFilter;

        ////////////////

        function ExecutantDuFilter(Params,devise,precision) {
            if(undefined==precision)precision=2;
            if(undefined==devise)devise='£';
            //calcul de la valeur de precision
            var precisionPow=Math.pow(10,precision);
            //arrondi à la precision souhaitée
            var rounded=Math.round(Params*precisionPow) / precisionPow;
            
            //verif du nb de 0 en decimal
            
            rounded=parseFloat(rounded).toFixed(precision);
            //retour affiché sur la vue de la valeur Params recu
            return rounded+devise;
        }
    }
})();