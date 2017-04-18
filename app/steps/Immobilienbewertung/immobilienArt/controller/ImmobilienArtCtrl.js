'use strict';

angular.module('Fineloo')


    .controller('ImmobilienArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "ImmobilienArt" , listClasses: "col-xs-3 col-sm-3" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.wertObjekt", items: [  {name: "Haus", value: "Haus" , imageName: 'haus.png' }, {name: "Wohnung", value: "Wohnung" , imageName: 'wohnung.png' },{name: "Grundstück", value: "Grundstueck" , imageName: 'grundstueck.png' }]};


        $scope.$watch('wertForm.wertObjekt', function (newValue) {

            if(newValue == 'Haus' ) {

                try {
                    $scope.slickConfigBewertung.method.slickNext();
                }
                catch (e)  {

                }
            }

            if(newValue == 'Wohnung' ) {

                try {
                    $scope.slickConfigBewertung.method.slickNext();
                }
                catch (e)  {

                }
            }

            if(newValue == 'Grundstueck' ) {

                try {
                    $scope.slickConfigBewertung.method.slickNext();
                }
                catch (e)  {

                }
            }
        });




    }]);