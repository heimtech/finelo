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


    $scope.wertForm = { wertObjekt: "",  grundstueckGroesse: 100, wohnflaeche: 50};




$scope.slickTitle = "Wie können wir Ihnen weiterhelfen?";


    $scope.$watch('formMode', function (newValue) {

        if($scope.formMode == 2) {

            $scope.slickTitle = "Kostenfreie Immobilienbewertung – Was ist Ihre Immobilie wirklich wert?";
            $scope.wertForm.anfrageart = "bewertung";

        }

        if($scope.formMode == 3) {

            $scope.slickTitle = "Jetzt zum besten Zins finanzieren.";
            $scope.wertForm.anfrageart = "finanzierung";
            $scope.slickTitleRight = "Über 1.000 begeisterte Kunden der Region Augsburg.";

        }

        if($scope.formMode == 4) {

            $scope.slickTitle = "Jetzt Ihre Bau- und Renovierungskosten ermitteln.";
            $scope.wertForm.anfrageart = "renovierung";
        }

        if($scope.formMode == 5) {

            $scope.slickTitle = "Jetzt Kredit beantragen.";
            $scope.wertForm.anfrageart = "privatkredit";
            $scope.slickTitleRight = "Über 1.000 begeisterte Kunden der Region Augsburg.";

        }

        if($scope.formMode == 6) {

            $scope.slickTitle = "Jetzt zum Höchstpreis verkaufen.";
            $scope.wertForm.anfrageart = "immobilienverkauf";
            $scope.slickTitleRight = "Über 1.000 begeisterte Kunden der Region Augsburg.";

        }


    });




    /*
     Headline: „Jetzt zum besten Zins Ihren Wunsch erfüllen. –

     > “               (Blauen Balken)

     >

     > o   1. Seite: Subline: „Sie möchten sich persönlich und

     > unverbindlich beraten lassen?“

     >

     > o   1. Seite: Eingabefeld: Kredithöhe, Laufzeit, Verwendung

     >

     > o   2. Seite: Kontaktfeld: „hier schicke ich noch die notwendigen

     > Eingabefelder (zur Not kann ich es aber auch selbst dann erweitern)

     >

     > §  Text für Anfrage: „Schnell, Unverbindlich, 100% kostenfrei,

     > individuell für Sie!“

     >

     > §  Balken Blau: „Über 1.000 begeisterte Kunden aus der Region Augsburg!“
     */



  $scope.submitPage = $scope.getUrlParameter("submitPage", $scope.url);

    if($scope.submitPage || $scope.submitPage == undefined) {
        $scope.submitPage = "/wp-content/plugins/finelo/formSubmit.php";

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
          templateUrl: '/wp-content/plugins/finelo/app/core/wizard/view/wizardsubmitdialog.html',
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




  $scope.goBackBewertung = function () {

    $scope.wertForm.transaktion = "";
    slickConfigBewertung.method.slickPrev()
  };




}]);





lApplication.controller('ImageSelectionGroupCtrl', [ '$scope',  function ($scope) {


    $scope.userSelection = {};

    $scope.messageString = $scope.selectionGroup.formName + "." + $scope.selectionGroup.name + ".$error";


    $scope.$watch("userSelection.selectedValue", function(newValues, oldValues){


        var lModelName = $scope.selectionGroup.modelName;
        var lSeparationArray = lModelName.split(".");

        if(newValues) {



            if(lSeparationArray.length == 1) {

                var lValue = $scope[lSeparationArray[0]]
                if(!angular.equals(lValue, newValues)) {
                    $scope[lSeparationArray[0]] = newValues;

                }

            } else if (lSeparationArray.length == 2) {
                var lValue =  $scope[lSeparationArray[0]][lSeparationArray[1]];
                if(!angular.equals(lValue, newValues)) {
                    $scope[lSeparationArray[0]][lSeparationArray[1]] = newValues;

                }

            } else if (lSeparationArray.length == 3) {
                var lValue = $scope[lSeparationArray[0]][lSeparationArray[1]][lSeparationArray[2]];
                if(!angular.equals(lValue, newValues)) {
                    $scope[lSeparationArray[0]][lSeparationArray[1]][lSeparationArray[2]] = newValues;

                }

            } else if (lSeparationArray.length == 4) {
                var lValue = $scope[lSeparationArray[0]][lSeparationArray[1]][lSeparationArray[2]][lSeparationArray[3]];
                if(!angular.equals(lValue, newValues)) {
                    $scope[lSeparationArray[0]][lSeparationArray[1]][lSeparationArray[2]][lSeparationArray[3]] = newValues;

                }


            }
        }






    }, true);

    $scope.$watch('selectionGroup', function(newValues, oldValues) {


        $scope.$watch($scope.selectionGroup.modelName, function (newValues, oldValues) {



            $scope.userSelection.selectedValue = newValues;



        }, true);

    });


    $scope.$watch('selectionGroup.defaultSelection', function(newValues, oldValues){


        if(newValues) {

            $('input[value="'+ newValues + '"]').iCheck('check');
        }

    }, true);



}]);



lApplication.controller('KontaktCtrl', ['$scope', '$http' , '$mdDialog' , function ($scope, $http, $mdDialog) {

    $scope.submitValue = "Hallo";

    this.submitFormDirect = function () {
        alert("hallo");
    }


    $scope.kontaktText = "Text";
    $scope.titleSendButton = "Senden";

    if($scope.formMode == 2) {
        $scope.kontaktText = "Immobilienbewertung vom Spezialisten.";
        $scope.textBlueBar = "Unverbindlich und 100% kostenfrei von den Immobilienspezialisten aus Augsburg."


    }
    if($scope.formMode == 3) {
        $scope.kontaktText = "Sie möchten sich persönlich und unverbindlich beraten lassen?";
        $scope.textBlueBar = "Unverbindlich, 100% kostenfrei und individuell für Sie!";
        $scope.titleSendButton = "Jetzt unverbindlich beraten lassen";
    }
    if($scope.formMode == 4) {
        $scope.kontaktText = "Bau- und Renovierungskosten vom Spezialisten.";
        $scope.textBlueBar = "Unverbindlich und 100% kostenfrei von den Immobilienspezialisten aus Augsburg."

    }

    if($scope.formMode == 5) {
        $scope.kontaktText = "Sie möchten sich persönlich und unverbindlich beraten lassen?";
        $scope.textBlueBar = "Unverbindlich, 100% kostenfrei und individuell für Sie!";
        $scope.titleSendButton = "Jetzt kostenlose Angebote erhalten.";

    }

    if($scope.formMode == 6) {
        $scope.kontaktText = "Sie möchten Ihr Haus zum Höchstpreis verkaufen?";
        $scope.textBlueBar = "Ihr regionaler Experte mit großem Netzwerk und Interessentenliste";
        $scope.titleSendButton = "Jetzt in Kontakt treten";

    }



    /*

     $scope.submitForm = function() {



     var lPromise = $http.post($scope.submitPage, $scope.wertForm);

     lPromise.then(
     function (answer) {


     $mdDialog.show({
     controller: SubmitDialogController,
     templateUrl: 'core/wizard/view/wizardsubmitdialog.html',
     parent: angular.element(document.body),
     targetEvent: answer,
     clickOutsideToClose: false
     })
     .then(function (answer) {
     $scope.status = 'You said the information was "' + answer + '".';
     }, function () {
     $scope.status = 'You cancelled the dialog.';
     });




     },

     function (error) {

     },

     function (progress) {
     // report progress

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

     };

     */


}]);



