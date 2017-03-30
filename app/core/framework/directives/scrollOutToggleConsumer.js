/**
 * Created by UC8456 on 21.10.2016.
 */


angular.module('Fineloo' ).directive('scrollOutToggleConsumer', ['$timeout' , '$window' , '$interval', function($timeout, $window, $interval) {


    return {

        restrict: 'A',

        controller: ['$scope', '$http' , function($scope, $http) {

            console.log("link");


        }],
        link: function($scope, iElement, iAttrs, ctrl) {


            console.log("link");

       /*     var lIterator = 0;

            var lIntervalController = $interval(function() {
                lIterator = lIterator + 1;
                console.log("Interval done - scope variable is " + $scope[iAttrs.scrollOutToggleConsumer]  );
                if(lIterator > 100) {
                   lIntervalController.cancel();
                }
            }, 10000);

            $interval.cancel(stop);


            */


            $scope.$watch(iAttrs.scrollOutToggleConsumer, function() {
                console.log('hey, myVar has changed!');
                if($scope.scrolledOut) {
                    iElement.removeClass('undock');
                } else {
                    iElement.addClass('undock');
                }
            }, true);




        }


    };


}]);