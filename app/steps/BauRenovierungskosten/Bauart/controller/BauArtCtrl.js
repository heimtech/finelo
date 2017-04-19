'use strict';

angular.module('Fineloo')


    .controller('BauArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Bauart" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.bauArt", items: [ {name: "Neubau", value: "Neubau" , imageName: 'haus.png' }, {name: "Renovierung", value: "Renovierung" , imageName: 'renovierung.png' }]};


        $scope.$watch('wertForm.bauArt', function (newValue) {
try {
    if(newValue != undefined && newValue != "") {
        $scope.slickConfigRenovierung.method.slickNext();
    }
}
catch (e) {

}


        });




    }]);