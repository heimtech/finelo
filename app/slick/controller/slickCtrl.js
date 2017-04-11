'use strict';

angular.module('Fineloo')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/slick', {
            templateUrl: 'slick/slick.html',
            controller: 'FinelooSlickCtrl'
        });
    }])

    .controller('FinelooSlickCtrl', ['$scope' ,'$location' , function ($scope, $location) {




        $scope.slickConfigBewertung = {
            initialSlide: 0,
            swipe: false,
            dots: true,
            speed: 600,
            prevArrow: false,
            nextArrow: false,
            centerPadding: '60px',
            method: {},
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {


                    if(nextSlide < currentSlide) {

                        if (currentSlide-1 <= 0) {

                            // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 0
                            $scope.wertForm.wertObjekt = "";
                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 1
                        if (currentSlide-1 <= 1) {

                            $scope.wertForm.transaktion = "";
                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 2
                        if (currentSlide-1 <= 2) {

                            $scope.wertForm.hausArt = "";
                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 3
                        if (currentSlide-1 <= 3) {

                            $scope.wertForm.wohnungsArt = "";
                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 4
                        if (currentSlide-1 <= 4) {

                           $scope.wertForm.wohnflaeche = "";
                           $scope.wertForm.grundstueckGroesse = "";
                           $scope.wertForm.zimmerZahl = "";
                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 5
                        if (currentSlide-1 <= 5) {

                            $scope.wertForm.stockwerke = "";

                        }
                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 6
                        if (currentSlide-1 <= 6) {

                            $scope.wertForm.baujahr = "";

                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 7
                        if (currentSlide-1 <= 7) {

                            $scope.wertForm.nutzungsart = "";

                        }

                        // DELETE ALL WERTFORM VALUES ON SLIDE INDEX 8
                        if (currentSlide-1 <= 8) {

                            $scope.wertForm.stellplatz = "";

                        }



                    }

                },
                afterChange: function (event, slick, currentSlide, nextSlide) {

                },
                breakpoint: function (event, slick, breakpoint) {
                    console.log('breakpoint');
                },
                destroy: function (event, slick) {
                    console.log('destroy');
                },
                edge: function (event, slick, direction) {
                    console.log('edge');
                },
                reInit: function (event, slick) {
                    console.log('re-init');
                },
                init: function (event, slick) {
                    console.log('init');
                },
                setPosition: function (evnet, slick) {
                    console.log('setPosition');
                },
                swipe: function (event, slick, direction) {
                    console.log('swipe');
                }
            }

        };


        $scope.slickConfigRenovierung = {
            initialSlide: 0,
            swipe: false,
            dots: false,
            speed: 600,
            prevArrow: false,
            nextArrow: false,
            centerPadding: '60px',
            method: {},
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {



                },
                afterChange: function (event, slick, currentSlide, nextSlide) {

                },
                breakpoint: function (event, slick, breakpoint) {
                    console.log('breakpoint');
                },
                destroy: function (event, slick) {
                    console.log('destroy');
                },
                edge: function (event, slick, direction) {
                    console.log('edge');
                },
                reInit: function (event, slick) {
                    console.log('re-init');
                },
                init: function (event, slick) {
                    console.log('init');
                },
                setPosition: function (evnet, slick) {
                    console.log('setPosition');
                },
                swipe: function (event, slick, direction) {
                    console.log('swipe');
                }
            }

        };


        $scope.$watch('wertForm.anfrageart', function (newValue) {



                $scope.wertForm.wertObjekt = "";
                $scope.wertForm.transaktion = "";
                $scope.wertForm.hausArt = "";
                 $scope.wertForm.wohnungsArt = "";

                $scope.wertForm.wohnflaeche = "";
                $scope.wertForm.grundstueckGroesse = "";
                $scope.wertForm.zimmerZahl = "";

                $scope.wertForm.stockwerke = "";


                $scope.wertForm.baujahr = "";

                $scope.wertForm.nutzungsart = "";



                $scope.wertForm.stellplatz = "";



        });






    }]);



