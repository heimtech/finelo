'use strict';

angular.module('Fineloo')


    .controller('StockwerkCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Stockwerke" , listClasses: "col-xs-3 col-sm-3" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.stockwerke", items: [  {name: "1 Stockwerk", value: "1-Stockwerk" , imageName: 'Haus.png' }, {name: "2 Stockwerke", value: "2-Stockwerke" , imageName: 'wohnung.png' }, {name: "3 und mehr", value: "3-Stockwerke-oder-mehr" , imageName: 'wohnung.png' }]};


        $scope.$watch('wertForm.stockwerke', function (newValue) {

            if($scope.formMode == 2) {
                try {
                    $scope.slickConfigBewertung.method.slickNext();
                }
                catch (e)  {

                }

            }

            if($scope.formMode == 4) {
                try {
                    $scope.slickConfigRenovierung.method.slickNext();
                }
                catch (e)  {

                }
            }



        });




    }]);