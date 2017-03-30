'use strict';

angular.module('Fineloo')


    .controller('Step1Ctrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Insert Shape" , listClasses: "col-xs-6 col-sm-3" ,  sectionBootstrapClasses: "col-xs-12", modelName: "wertForm.wertObjekt", items: [ {name: "Grundstück", value: "grundstueck" , imageName: 'grundstueck.png' }, {name: "Haus", value: "haus" , imageName: 'Haus.png' }, {name: "Wohnung", value: "wohnung" , imageName: 'wohnung.png' }, {name: "Gewerbe", value: "gewerbe" , imageName: 'gewerbe.png' } ]};







    }]);