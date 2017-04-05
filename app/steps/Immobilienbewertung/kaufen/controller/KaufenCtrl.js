'use strict';

angular.module('Fineloo')


    .controller('KaufenCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Kaufen" , listClasses: "col-xs-3 col-sm-3" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.transaktion", items: [  {name: "Kaufen", value: "Kaufen" , imageName: 'Haus.png' }, {name: "Verkaufen", value: "Verkaufen" , imageName: 'wohnung.png' }]};


        $scope.$watch('wertForm.transaktion', function (newValue) {

            if($scope.wertForm.wertObjekt == 'Haus' ) {


                $scope.slickConfigBewertung.method.slickGoTo(2);
            }

            if($scope.wertForm.wertObjekt == 'Wohnung' ) {


                $scope.slickConfigBewertung.method.slickGoTo(3);
            }

            if($scope.wertForm.wertObjekt == 'Grundstueck' ) {


                $scope.slickConfigBewertung.method.slickGoTo(2);
            }
        });




    }]);