'use strict';

// Declare app level module which depends on views, and components
var lApplication = angular.module('Fineloo', [
  'ngRoute', 'ngMessages', 'ngAria','ngMaterial', 'rzModule',
  'slickCarousel',  'ui.bootstrap', 'ngSanitize', 'ngAnimate',])
        .config(['$locationProvider', '$routeProvider', '$logProvider', function($locationProvider, $routeProvider, $logProvider) {

            $locationProvider.hashPrefix('!');


    $logProvider.debugEnabled(true);
    $routeProvider.otherwise({redirectTo: '/slick'});




}]);

lApplication.controller('FinelooCtrl', [ '$scope' , '$mdDialog', function ($scope, $mdDialog) {


  $scope.wertForm = { wertObjekt: "", anfrageart : "bewertung", grundstueckGroesse: 100, wohnflaeche: 50};


  $scope.goBackBewertung = function () {

    $scope.wertForm.transaktion = "";
    slickConfigBewertung.method.slickPrev()
  }


}]);








