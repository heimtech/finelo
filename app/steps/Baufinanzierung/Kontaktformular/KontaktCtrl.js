'use strict';

angular.module('Fineloo')


    .controller('KontaktCtrl', ['$scope', '$http' , '$mdDialog' , function ($scope, $http, $mdDialog) {

        $scope.submitValue = "Hallo";

        this.submitFormDirect = function () {
            alert("hallo");
        }


        $scope.kontaktText = "Text";
        $scope.titleSendButton = "Senden";

        if($scope.formMode == 2) {
            $scope.kontaktText = "Immobilienbewertung vom Spezialisten.";
            $scope.textBlueBar = ""


        }
        if($scope.formMode == 3) {
            $scope.kontaktText = "Sie möchten sich persönlich und unverbindlich beraten lassen?";
            $scope.textBlueBar = "Über 1.000 begeisterte Kunden aus der Region Augsburg!";
            $scope.titleSendButton = "Jetzt unverbindlich beraten lassen";
        }
        if($scope.formMode == 4) {
            $scope.kontaktText = "Bau- und Renovierungskosten vom Spezialisten.";
            $scope.textBlueBar = "unverbindlich, kostenfrei, Top-Service"

        }

        if($scope.formMode == 5) {
            $scope.kontaktText = "Sie möchten sich persönlich und unverbindlich beraten lassen?";
            $scope.textBlueBar = "Über 1.000 begeisterte Kunden aus der Region Augsburg!";
            $scope.titleSendButton = "Jetzt kostenlose Angebote erhalten.";

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