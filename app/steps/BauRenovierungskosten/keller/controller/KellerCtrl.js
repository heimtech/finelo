'use strict';

angular.module('Fineloo')


    .controller('KellerCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Keller" , listClasses: "col-xs-3 col-sm-3" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.keller", items: [  {name: "Keller", value: "Keller" , imageName: 'Haus.png' }, {name: "Bodenplatte", value: "Bodenplatte" , imageName: 'wohnung.png' }]};


        $scope.$watch('wertForm.keller', function (newValue) {

            try {
                $scope.slickConfigRenovierung.method.slickNext();
            }
            catch (e)  {

            }

        });




    }]);