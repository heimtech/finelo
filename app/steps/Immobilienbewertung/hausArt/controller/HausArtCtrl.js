'use strict';

angular.module('Fineloo')


    .controller('HausArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "HausArt" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.hausArt", items: [  {name: "Einfamilienhaus", value: "einfamilienhaus" , imageName: 'haus.png' }, {name: "Mehrfamilienhaus", value: "mehrfamilien" , imageName: 'wohnung.png' },{name: "Doppelhaushälfte", value: "doppelhaushaelfte" , imageName: 'doppelhaushaelfte.png' },{name: "Mittel-Reihenhaus", value: "Mittel-Reihen-Haus" , imageName: 'reihenmittelhaus.png' } ,{name: "End-Reihenhaus", value: "End-Reihenhaus" , imageName: 'reihenendhaus.png' }, {name: "Bungalow", value: "Bungalow" , imageName: 'bungalow.png' }]};



        $scope.$watch('wertForm.hausArt', function (newValue) {


          try {
              if(newValue != undefined && newValue != "") {
                  $scope.slickConfigBewertung.method.slickNext();
              }
          }
          catch (e) {

          }


        });



    }]);