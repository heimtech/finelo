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

lApplication.controller('FinelooCtrl', [ '$scope' , '$mdDialog', '$location', '$http', '$timeout', function ($scope, $mdDialog, $location, $http, $timeout) {


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




  $scope.submitPage = $scope.getUrlParameter("submitPage", $scope.url);

    if($scope.submitPage || $scope.submitPage == undefined) {
        $scope.submitPage = "http://wpdemo.heim-tech.de/wp-content/plugins/finelo/formSubmit.php";

    }

    $scope.showAboutDialog = function() {

        $mdDialog.show({
            controller: SubmitDialogController,
            templateUrl: 'core/wizard/view/aboutdialog.html',
            parent: angular.element(document.body),
            hasBackdrop: false,
            clickOutsideToClose: false
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });

        function SubmitDialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }

    }

  $scope.submitForm = function() {

      $mdDialog.show({
          controller: SubmitDialogController,
          templateUrl: 'core/wizard/view/wizardsubmitdialog.html',
          parent: angular.element(document.body),
          hasBackdrop: false,
          clickOutsideToClose: false
      })
          .then(function (answer) {
              $scope.status = 'You said the information was "' + answer + '".';
          }, function () {
              $scope.status = 'You cancelled the dialog.';
          });


      function SubmitDialogController($scope, $mdDialog) {
          $scope.hide = function () {
              $mdDialog.hide();
          };

          $scope.cancel = function () {
              $mdDialog.cancel();
          };

          $scope.answer = function (answer) {
              $mdDialog.hide(answer);
          };
      }


    var lPromise = $http.post($scope.submitPage, $scope.wertForm);

    lPromise.then(
        function (answer) {





        },

        function (error) {

        },

        function (progress) {
          // report progress

        });




  };


   $scope.wertForm = { wertObjekt: "", anfrageart : "bewertung", grundstueckGroesse: 100, wohnflaeche: 50};


  $scope.goBackBewertung = function () {

    $scope.wertForm.transaktion = "";
    slickConfigBewertung.method.slickPrev()
  };




}]);








