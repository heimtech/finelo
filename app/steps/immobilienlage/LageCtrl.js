'use strict';

angular.module('Fineloo')


    .controller('LageCtrl', ['$scope' , function ($scope) {

        $scope.submitValue = "Hallo";

        this.submitFormDirect = function () {
            alert("hallo");
        }

        $scope.submitForm = function() {



            var lPromise = $http.post($scope.submitPage, $scope.wertForm);

            lPromise.then(
                function (answer) {


                    $mdDialog.show({
                        controller: SubmitDialogController,
                        templateUrl: '/core/wizard/view/wizardsubmitdialog.html',
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




    }]);