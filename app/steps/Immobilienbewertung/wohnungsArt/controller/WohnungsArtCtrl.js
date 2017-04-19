'use strict';

angular.module('Fineloo')


    .controller('WohnungsArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Wohnungsart" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.wohnungsArt", items: [  {name: "Souterrain", value: "Souterrain" , imageName: 'check.png' }, {name: "Erdgeschosswohnung", value: "Erdgeschosswohnung" , imageName: 'check.png' },{name: "Etagenwohnung", value: "Etagenwohnung" , imageName: 'check.png' },{name: "Dachgeschosswohnung", value: "Dachgeschosswohnung" , imageName: 'check.png' } ,{name: "Maisonette", value: "Maisonette" , imageName: 'check.png' }, {name: "Loft", value: "Loft" , imageName: 'check.png' }]};



        $scope.$watch('wertForm.wohnungsArt', function (newValue) {


            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigBewertung.method.slickNext();
                }

            }
            catch (e) {

            }


        });



    }]);