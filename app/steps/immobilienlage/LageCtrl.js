'use strict';

angular.module('Fineloo')


    .controller('LageCtrl', ['$scope' , function ($scope) {

        $scope.submitValue = "Hallo";

        this.submitFormDirect = function () {
            alert("hallo");
        }





    }]);