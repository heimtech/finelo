'use strict';

angular.module('Fineloo')


    .controller('KellerCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Keller" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.keller", items: [  {name: "Keller", value: "Keller" , imageName: 'keller.png' }, {name: "Bodenplatte", value: "Bodenplatte" , imageName: 'bodenplatte.png' }]};


        $scope.$watch('wertForm.keller', function (newValue) {

            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigRenovierung.method.slickNext();
                }            }
            catch (e)  {

            }

        });




    }]);