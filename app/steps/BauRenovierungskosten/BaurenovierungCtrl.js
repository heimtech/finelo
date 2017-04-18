'use strict';

var lApp = angular.module('Fineloo');


lApp.controller('BaurenovierungCtrl', ['$scope' , function ($scope) {







    }]);


lApp.controller('RenovierungHausArtCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "HausArt" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.hausArtRenovierung", items: [  {name: "Einfamilienhaus", value: "einfamilienhaus" , imageName: 'haus.png' },{name: "Doppelhaushälfte", value: "doppelhaushaelfte" , imageName: 'grundstueck.png' },{name: "Sonstige", value: "Sonstige" , imageName: 'grundstueck.png' }]};



    $scope.$watch('wertForm.hausArt', function (newValue) {


        try {
            $scope.slickConfigBewertung.method.slickNext();


        }
        catch (e) {

        }


    });



}]);







/*
Bau- und Renovierungskosten

>>

>>

>>

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