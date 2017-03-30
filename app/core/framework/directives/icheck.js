/**
 * Created by UC8456 on 23.01.2017.
 */


/**
 * Created by UC8456 on 21.10.2016.
 */


angular.module('Fineloo' ).directive('icheck', ['$window', '$timeout', function($window, $timeout) {


    return {
        require: 'ngModel',
        link: function ($scope, element, $attrs, ngModel) {
            return $timeout(function () {
                var value;
                value = $attrs['value'];

                $scope.$watch($attrs['ngModel'], function (newValue) {
                    $(element).iCheck('update');
                });

                $scope.$watch($attrs['ngDisabled'], function (newValue) {
                    $(element).iCheck(newValue ? 'disable' : 'enable');
                    $(element).iCheck('update');
                });

                $scope.$watch($attrs['checked'], function (newValue) {
                    $(element).iCheck('update');
                })

                $scope.$watch(ngModel.$modelValue, function (newValue) {
                    $(element).iCheck('update');
                })


                return $(element).iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green'

                }).on('ifChanged', function (event) {
                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                        $scope.$apply(function () {
                            return ngModel.$setViewValue(event.target.checked);
                        })
                    }
                }).on('ifClicked', function (event) {
                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                        return $scope.$apply(function () {
                            //set up for radio buttons to be de-selectable
                            if (ngModel.$viewValue != value)
                                return ngModel.$setViewValue(value);
                            else
                                ngModel.$setViewValue(null);
                            ngModel.$render();
                            return
                        });
                    }
                });
            });
        }
    };


}]);

