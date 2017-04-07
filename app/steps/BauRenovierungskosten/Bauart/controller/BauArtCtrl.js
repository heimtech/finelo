'use strict';

angular.module('Fineloo')


    .controller('BauArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Bauart" , listClasses: "col-xs-6 col-sm-6" ,  sectionBootstrapClasses: "col-xs-12", modelName: "wertForm.bauArt", items: [ {name: "Neubau", value: "Neubau" , imageName: 'grundstueck.png' }, {name: "Renovierung", value: "Renovierung" , imageName: 'haus.png' }]};







    }]);