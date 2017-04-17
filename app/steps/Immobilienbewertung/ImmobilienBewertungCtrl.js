'use strict';

angular.module('Fineloo')


    .controller('ImmobilienbewertungCtrl', ['$scope' , function ($scope) {


        $scope.goToNutzungsArt =  function() {

            try {
                $scope.slickConfigBewertung.method.slickGoTo(6);
            }
            catch (e)  {

            }
        }




    }]);