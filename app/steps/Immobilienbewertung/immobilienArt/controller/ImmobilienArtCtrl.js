'use strict';

angular.module('Fineloo')


    .controller('ImmobilienArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "ImmobilienArt" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.wertObjekt", items: [  {name: "Haus", value: "Haus" , imageName: 'haus.png' }, {name: "Wohnung", value: "Wohnung" , imageName: 'wohnung.png' },{name: "Grundstück", value: "Grundstueck" , imageName: 'grundstueck.png' }]};


        $scope.$watch('wertForm.wertObjekt', function (newValue) {

            if(newValue == 'Haus' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

            if(newValue == 'Wohnung' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

            if(newValue == 'Grundstueck' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }
        });




    }]);