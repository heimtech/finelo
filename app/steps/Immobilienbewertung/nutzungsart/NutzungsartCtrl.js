'use strict';

angular.module('Fineloo')


    .controller('NutzungsartCtrl', ['$scope' , function ($scope) {

        $scope.selectionGroup = {name: "Nutzungsart" , listClasses: "col-xs-6 col-sm-4" ,  sectionBootstrapClasses: "col-xs-12 col-sm-10", modelName: "wertForm.nutzungsart", items: [  {name: "Vermietet", value: "Vermietet" , imageName: 'Haus.png' }, {name: "Eigennutzung", value: "Eigennutzung" , imageName: 'wohnung.png' },{name: "Sonstiges", value: "Sonstiges" , imageName: 'grundstueck.png' }]};


        $scope.$watch('wertForm.nutzungsart', function (newValue) {


            $scope.slickConfigBewertung.method.slickGoTo(7);

        });





    }]);