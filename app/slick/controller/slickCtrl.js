'use strict';

angular.module('Fineloo')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/slick', {
            templateUrl: 'slick/slick.html',
            controller: 'FinelooSlickCtrl'
        });
    }])

    .controller('FinelooSlickCtrl', ['$scope' , function ($scope) {


        $scope.slickConfig = {
            initialSlide: 0,
            swipe: true,
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




    }]);



