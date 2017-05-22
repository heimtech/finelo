'use strict';

angular.module('Fineloo')


    .controller('StellplatzCtrl', ['$scope' , function ($scope) {

        $scope.selectionGroup = {name: "Nutzungsart" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.stellplatz", items: [  {name: "Garage", value: "Garage" , imageName: 'garage.png' }, {name: "Carport", value: "Carport" , imageName: 'carport.png' },{name: "Im Freien", value: "Im-Freien" , imageName: 'imfreien.png' }, {name: "Kein Stellplatz", value: "Kein-Stellplatz" , imageName: 'keinstellplatz.png' }]};


        $scope.$watch('wertForm.stellplatz', function (newValue) {



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