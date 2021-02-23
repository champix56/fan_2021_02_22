(function() {
    'use strict';
    angular
        .module('app')
        .filter('limitDesc', Filter);
    function Filter() {
        return FilterFilter;
        /**
         * Limit la taille d'une chaine et ajoute '...' si plus long que maxLength
         * @param {String} Params valeur a tronquer
         * @param {Number} maxLength taille Max
         */
        function FilterFilter(Params,maxLength) {
            if(undefined==maxLength)maxLength=20;
            if(Params.length<maxLength){return Params;}

            return Params.substr(0,maxLength)+'...';
        }
    }
})();