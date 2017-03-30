var module = angular
    .module('Fineloo').filter('rangeFilter', function() {
    return function( items, rangeInfo, pPropertyName ) {
        var filtered = [];
        var min = parseInt(rangeInfo.min);
        var max = parseInt(rangeInfo.max);
        // If time is with the range
        angular.forEach(items, function(item) {

            if(min && max) {

                if( item[pPropertyName] >= min && item[pPropertyName] <= max ) {

                    filtered.push(item);
                }

            } else if (min && !max) {

                if( item[pPropertyName] >= min) {

                    filtered.push(item);
                }

            } else if (!min && max) {

                if( item[pPropertyName] <= max ) {

                    filtered.push(item);
                }

            } else {
                filtered.push(item);
            }

        });
        return filtered;
    };
});