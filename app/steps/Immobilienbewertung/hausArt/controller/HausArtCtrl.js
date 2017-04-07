'use strict';

angular.module('Fineloo')


    .controller('HausArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "HausArt" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.hausArt", items: [  {name: "Einfamilienhaus", value: "einfamilienhaus" , imageName: 'haus.png' }, {name: "Mehrfamilienhaus", value: "mehrfamilien" , imageName: 'wohnung.png' },{name: "Doppelhaushälfte", value: "doppelhaushaelfte" , imageName: 'grundstueck.png' },{name: "Mittel-Reihenhaus", value: "Mittel-Reihen-Haus" , imageName: 'grundstueck.png' } ,{name: "End-Reihenhaus", value: "End-Reihenhaus" , imageName: 'grundstueck.png' }, {name: "Bungalow", value: "Bungalow" , imageName: 'grundstueck.png' }]};



        $scope.$watch('wertForm.hausArt', function (newValue) {


          try {
              $scope.slickConfigBewertung.method.slickGoTo(3);

          }
          catch (e) {

          }


        });



    }]);