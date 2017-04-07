'use strict';

angular.module('Fineloo')


    .controller('WohnungsArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Wohnungsart" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.wohnungsArt", items: [  {name: "Souterrain", value: "Souterrain" , imageName: 'haus.png' }, {name: "Erdgeschosswohnung", value: "Erdgeschosswohnung" , imageName: 'wohnung.png' },{name: "Etagenwohnung", value: "Etagenwohnung" , imageName: 'grundstueck.png' },{name: "Dachgeschosswohnung", value: "Dachgeschosswohnung" , imageName: 'grundstueck.png' } ,{name: "Maisonette", value: "Maisonette" , imageName: 'grundstueck.png' }, {name: "Loft", value: "Loft" , imageName: 'grundstueck.png' }]};



        $scope.$watch('wertForm.wohnungsArt', function (newValue) {


            try {
                $scope.slickConfigBewertung.method.slickGoTo(3);

            }
            catch (e) {

            }


        });



    }]);