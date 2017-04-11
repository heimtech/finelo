'use strict';

// Declare app level module which depends on views, and components
var lApplication = angular.module('Fineloo', [
  'ngRoute', 'ngMessages', 'ngAria','ngMaterial', 'rzModule',
  'slickCarousel',  'ui.bootstrap', 'ngSanitize', 'ngAnimate',])
        .config(['$locationProvider', '$routeProvider', '$logProvider', function($locationProvider, $routeProvider, $logProvider) {

          $routeProvider.otherwise({redirectTo: '/slick'});






          $logProvider.debugEnabled(true);


          $locationProvider.hashPrefix('#');

          /*
          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });

*/

}]);

lApplication.controller('FinelooCtrl', [ '$scope' , '$mdDialog', '$location', function ($scope, $mdDialog, $location) {


  $scope.getUrlParameter = function(param, dummyPath) {
    var sPageURL = dummyPath || window.location.search.substring(1),
        sURLVariables = sPageURL.split(/[&||?]/),
        res;

    for (var i = 0; i < sURLVariables.length; i += 1) {
      var paramName = sURLVariables[i],
          sParameterName = (paramName || '').split('=');

      if (sParameterName[0] === param) {
        res = sParameterName[1];
      }
    }

    return res;
  }

  $scope.url =  $location.absUrl();

  $scope.formMode = $scope.getUrlParameter("formMode", $scope.url);
   $scope.wertForm = { wertObjekt: "", anfrageart : "bewertung", grundstueckGroesse: 100, wohnflaeche: 50};


  $scope.goBackBewertung = function () {

    $scope.wertForm.transaktion = "";
    slickConfigBewertung.method.slickPrev()
  }




}]);








