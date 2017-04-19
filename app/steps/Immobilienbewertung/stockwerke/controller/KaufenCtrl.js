'use strict';

angular.module('Fineloo')


    .controller('KaufenCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Kaufen" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.transaktion", items: [  {name: "Kaufen", value: "Kaufen" , imageName: 'kaufen.png' }, {name: "Verkaufen", value: "Verkaufen" , imageName: 'verkaufen.png' }]};


        $scope.$watch('wertForm.transaktion', function (newValue) {

            if($scope.wertForm.wertObjekt == 'Haus' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                         }
                catch (e)  {

                }
            }

            if($scope.wertForm.wertObjekt == 'Wohnung' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }
                }
                catch (e)  {

                }
            }

            if($scope.wertForm.wertObjekt == 'Grundstueck' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                         }
                catch (e)  {

                }
            }
        });




    }]);