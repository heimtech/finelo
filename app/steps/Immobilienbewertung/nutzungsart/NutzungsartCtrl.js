'use strict';

angular.module('Fineloo')


    .controller('NutzungsartCtrl', ['$scope' , function ($scope) {

        $scope.selectionGroup = {name: "Nutzungsart" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.nutzungsart", items: [  {name: "Vermietet", value: "Vermietet" , imageName: 'vermietet.png' }, {name: "Eigennutzung", value: "Eigennutzung" , imageName: 'familie.png' },{name: "Sonstiges", value: "Sonstiges" , imageName: 'sonstige.png' }]};


        $scope.goPrevNutzungsArt = function() {

            try {
                if($scope.wertForm.wertObjekt == "Wohnung") {
                    $scope.slickConfigBewertung.method.slickPrev();
                }

                if($scope.wertForm.wertObjekt == "Haus") {
                    $scope.slickConfigBewertung.method.slickPrev();

                }

            }
            catch (e)  {

            }

        }


        $scope.$watch('wertForm.nutzungsart', function (newValue) {

            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigBewertung.method.slickNext();
                }            }
            catch (e)  {

            }

        });





    }]);