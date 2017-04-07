'use strict';

angular.module('Fineloo')


    .controller('ImmobilienbewertungCtrl', ['$scope' , function ($scope) {


        $scope.goToNutzungsArt =  function() {

            $scope.slickConfigBewertung.method.slickGoTo(6);
        }




    }]);