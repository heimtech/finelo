var lModule = angular.module('Fineloo') ;


lModule.controller('ImageSelectionGroupCtrl', [ '$scope',  function ($scope) {


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


