/**
 * Created by UC8456 on 21.10.2016.
 */


angular.module('Fineloo' ).directive('scrollOutToggleProvider', ['$timeout' , '$window', function($timeout, $window) {


    return {

        restrict: 'A',

        controller : function($scope){
            $scope.isScrolledOut = false;

        },


        link: function($scope, iElement, iAttrs, ctrl) {


            console.log("link");

            function elementInViewport(el, pWindow) {
                var top = el.offsetTop;
                var left = el.offsetLeft;
                var width = el.offsetWidth;
                var height = el.offsetHeight;

                while(el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }

                return (
                    top < (window.pageYOffset + window.innerHeight) &&
                    left < (window.pageXOffset + window.innerWidth) &&
                    (top + height) > (window.pageYOffset + 100) &&
                    (left + width) > window.pageXOffset
                );
            }

            var lWasInViewPortLastTime = false;

            angular.element($window).bind("scroll", function() {

                var lIsInViewPortCurrent = elementInViewport(iElement[0], this);
                lWasInViewPortLastTime = !$scope[iAttrs.scrollOutToggleProvider];

                if(lWasInViewPortLastTime != lIsInViewPortCurrent) {
                    console.log("scroll view state changed");
                }

                if (lIsInViewPortCurrent) {


                    $scope[iAttrs.scrollOutToggleProvider] = false;

                } else {

                    $scope[iAttrs.scrollOutToggleProvider] =  true;
                }

                $scope.$digest();
            });





        }


    };


}]);