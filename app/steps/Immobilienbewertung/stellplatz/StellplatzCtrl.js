'use strict';

angular.module('Fineloo')


    .controller('StellplatzCtrl', ['$scope' , function ($scope) {

        $scope.selectionGroup = {name: "Nutzungsart" , listClasses: "col-xs-3 col-sm-3" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.stellplatz", items: [  {name: "Garage", value: "Garage" , imageName: 'Haus.png' }, {name: "Carport", value: "Carport" , imageName: 'wohnung.png' },{name: "Im Freien", value: "Im-Freien" , imageName: 'grundstueck.png' }, {name: "Kein Stellplatz", value: "Kein-Stellplatz" , imageName: 'grundstueck.png' }]};


        $scope.$watch('wertForm.stellplatz', function (newValue) {



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