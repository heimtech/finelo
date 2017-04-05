'use strict';

angular.module('Fineloo')






    .controller('FlaechenCtrl', ['$scope' , function ($scope) {


        $scope.FlaecheTitle = "Wie groß ist die Grundstücksfläche?";
        $scope.imageStep1 = "../assets/img/wohnung.png";
        $scope.imageStep2 = "../assets/img/grundstueck.png";


        //Slider with draggable range
        $scope.slider_grundstueck = {
            value: 100,
            options: {
                floor: 0,
                ceil: 2500,
                step: 50
            }
        };

        //Slider with draggable range
        $scope.slider_wohnflaeche = {

            value: 50,
            options: {
                floor: 0,
                ceil: 500,
                step: 2
            }
        };



        $scope.$watch('slider_wohnflaeche.value', function (newValue) {

         $scope.wertForm.wohnflaeche = newValue;
        });


        $scope.$watch('slider_grundstueck.value', function (newValue) {

            $scope.wertForm.grundstueckGroesse = newValue;
        });



    }]);