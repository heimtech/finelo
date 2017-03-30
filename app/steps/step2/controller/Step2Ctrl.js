'use strict';

angular.module('Fineloo')






    .controller('Step2Ctrl', ['$scope' , function ($scope) {


        $scope.FlaecheTitle = "Platzhalter";

        $scope.imageStep2 = "";


        $scope.$watch('wertForm.wertObjekt', function(newValues, oldValues){

            if(newValue == 'grundstueck') {

                $scope.FlaecheTitle = "Welche Fläche hat das Grundtsück?";
                $scope.imageStep2 = "../assets/img/grundstueck_groesse.png";
                $scope.slider_all_options = $scope.slider_option_grundstueck;
            }
            if(newValue == 'haus') {
                $scope.FlaecheTitle = "Welche Fläche hat das Grundstück des Hauses?";
                $scope.imageStep2 = "../assets/img/grundstueck_groesse.png";
                $scope.slider_all_options = $scope.slider_option_wohnung;

            }
            if(newValue == 'wohnung') {
                $scope.FlaecheTitle = "Wie ist die Wohnfläche der Wohnung?";
                $scope.imageStep2 = "../assets/img/wohnung.png";
                $scope.slider_all_options = $scope.slider_option_grundstueck;

            }
            if(newValue == 'gewerbe') {

            }

        });

        //Slider with draggable range
        $scope.slider_option_grundstueck = {
            minValue: 100,
            maxValue: 5000,
            options: {

                step: 50,

            }
        };

        //Slider with draggable range
        $scope.slider_option_wohnung = {
            minValue: 20,
            maxValue: 300,
            options: {

                step: 10,

            }
        };


        //Slider with draggable range
        $scope.slider_all_options = $scope.slider_option_grundstueck;


    }]);