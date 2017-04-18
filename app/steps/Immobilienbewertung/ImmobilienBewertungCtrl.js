'use strict';

angular.module('Fineloo')


    .controller('ImmobilienbewertungCtrl', ['$scope' , function ($scope) {


        $scope.goToNutzungsArt =  function() {

            try {
                $scope.slickConfigBewertung.method.slickNext();
            }
            catch (e)  {

            }
        }




    }]);



/*

 >> 1.       Auswahl

 >>

 >> -          Neubau

 >>

 >> -          Renovierung

 >>

 >>

 >>

 >> für Neubau folgen folgende Auswahlmöglichkeiten

 >>

 >> 2.       Auswahl

 >>

 >>

 >>

 >> -          Einfamilienhaus

 >>

 >> -          Doppelhaushälfte

 >>

 >>

 >>

 >> 3.       Auswahl

 >>

 >> -          Wohnfläche

 >>

 >>

 >>

 >> 4.       Auswahl

 >>

 >> -          Stockwerke

 >>

 >>

 >>

 >> 5.       Auswahl

 >>

 >> -          Keller

 >>

 >>

 >>

 >> 6.       Auswahl

 >>

 >> -          Garage

 >>

 >>

 >>

 >> 7.       Auswahl

 >>

 >> -          PLZ / Ort

 >>

 >>

 >>

 >> 8.       Auswahl

 >>

 >> -          Kontakt

 >>

 >>

 >>

 >> Bei Renovierung

 >>

 >>

 >>

 >> WOHNUNG kommt Auswahl 4, 5, 8, 9



 */