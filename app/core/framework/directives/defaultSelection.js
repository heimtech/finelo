/**
 * Created by UC8456 on 21.10.2016.
 */


angular.module('Fineloo' ).directive('defaultSelection', ['$timeout', function($timeout) {


    return {

        restrict: 'A',

        controller: ['$scope', '$http' , function($scope, $http) {

            // do nothing for now;

        }],
        link: function(scope, iElement, iAttrs, ctrl) {


if(iAttrs.defaultSelection === "true") {

    $timeout(function() {
        var lSelector = "#" + iAttrs.id;
        var lResult = angular.element(document.querySelector(lSelector));
        lResult.triggerHandler('click');
    });

}




        }

    };


}]);