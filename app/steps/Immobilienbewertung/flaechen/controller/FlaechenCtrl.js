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

        //Slider with draggable range
        $scope.slider_zimmer = {

            value: 3,
            options: {
                floor: 1,
                ceil: 10,
                step: 1
            }
        };



        $scope.$watch('slider_wohnflaeche.value', function (newValue) {

         $scope.wertForm.wohnflaeche = newValue;
        });


        $scope.$watch('slider_grundstueck.value', function (newValue) {

            $scope.wertForm.grundstueckGroesse = newValue;
        });

        $scope.$watch('slider_zimmer.value', function (newValue) {

            $scope.wertForm.zimmerZahl = newValue;
        });

        $scope.delegateNextSlide = function() {



                if($scope.wertForm.wertObjekt == 'Haus' ) {


                    $scope.slickConfigBewertung.method.slickGoTo(4);
                }

                if($scope.wertForm.wertObjekt == 'Wohnung' ) {


                    $scope.slickConfigBewertung.method.slickGoTo(6);
                }


            if($scope.wertForm.wertObjekt == 'Grundstueck' ) {


                $scope.slickConfigBewertung.method.slickGoTo(7);
            }

        }


    }]);