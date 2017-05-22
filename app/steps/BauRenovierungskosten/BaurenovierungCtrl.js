'use strict';

var lApp = angular.module('Fineloo');


lApp.controller('BaurenovierungCtrl', ['$scope' , function ($scope) {







    }]);


lApp.controller('RenovierungHausArtCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "HausArtRenovierung" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.hausArtRenovierung", items: [  {name: "Einfamilienhaus", value: "einfamilienhaus" , imageName: 'haus.png' },{name: "Doppelhaushälfte", value: "doppelhaushaelfte" , imageName: 'doppelhaushaelfte.png' },{name: "Sonstige", value: "Sonstige" , imageName: 'sonstige.png' }]};



    $scope.$watch('wertForm.hausArtRenovierung', function (newValue) {


        try {
            if(newValue != undefined && newValue != "") {
                $scope.slickConfigRenovierung.method.slickNext();
            }

        }
        catch (e) {

        }


    });



}]);



lApp.controller('BauArtCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "Bauart" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.bauArt", items: [ {name: "Neubau", value: "Neubau" , imageName: 'haus.png' }, {name: "Renovierung", value: "Renovierung" , imageName: 'renovierung.png' }]};


    $scope.$watch('wertForm.bauArt', function (newValue) {
        try {
            if(newValue != undefined && newValue != "") {
                $scope.slickConfigRenovierung.method.slickNext();
            }
        }
        catch (e) {

        }


    });




}]);

lApp.controller('KellerCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "Keller" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.keller", items: [  {name: "Keller", value: "Keller" , imageName: 'keller.png' }, {name: "Bodenplatte", value: "Bodenplatte" , imageName: 'bodenplatte.png' }]};


    $scope.$watch('wertForm.keller', function (newValue) {

        try {
            if(newValue != undefined && newValue != "") {
                $scope.slickConfigRenovierung.method.slickNext();
            }            }
        catch (e)  {

        }

    });




}]);



