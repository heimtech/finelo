'use strict';

angular.module('Fineloo')


    .controller('StockwerkCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Stockwerke" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.stockwerke", items: [  {name: "1 Stockwerk", value: "1-Stockwerk" , imageName: '1Stock.png' }, {name: "2 Stockwerke", value: "2-Stockwerke" , imageName: '2Stock.png' }, {name: "3 und mehr", value: "3-Stockwerke-oder-mehr" , imageName: '3.png' }]};


        $scope.$watch('wertForm.stockwerke', function (newValue) {

            if($scope.formMode == 2) {
                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }

            }

            if($scope.formMode == 4) {
                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigRenovierung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }



        });




    }]);