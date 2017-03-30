/**
 * Created by UC8456 on 21.12.2016.
 */

/**
 * Receives a list of all  items  by checking of uniqueness of a property by propertyName
 */
var module = angular
    .module('Fineloo')
    .filter('uniqueFilter', ['UtilityService', function(UtilityService) {
    return function( items, pPropertyName, pSortResultItems ) {
        var filtered = [];
        var propertyValueSort = [];

        // If time is with the range
        angular.forEach(items, function(item) {
            if( propertyValueSort.indexOf(item[pPropertyName]) < 0  ) {
                propertyValueSort.push(item[pPropertyName]);
                filtered.push(item);
            }
        });
        if(pSortResultItems) {
            filtered.sort(UtilityService.sort_by(pPropertyName, false));
        }
        return filtered;
    };
}]);