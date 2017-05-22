var module = angular.module('XpressOnline');

module.factory('Wizard', ['$location', '$anchorScroll', 'WebRequestService', 'TibpService', '$mdDialog',  function ($location, $anchorScroll, WebRequestService, TibpService, $mdDialog) {


    var Wizard = function Wizard(pTool, pScope) {
        // this.setToolName("IndexableMilling");


        this.scope = pScope;
        this.tool = pTool;
        /**
         * The name of the tool
         * @type {string}
         */
        this.steps = [];

        this.setStepValidator = function (pScope, pFormName, pIndex) {

            var lThat = this;

            pScope.$watch(pFormName + ".$valid", function (newValue, oldValue) {
                console.log("now available");
                var lIndex = lThat.slickCurrentIndex;
                if (lIndex === pIndex && newValue) {
                    console.log("enable slick next")
                    $(".slick-next").prop('disabled', false);

                } else {
                    console.log("disable slick next");
                    $(".slick-next").prop('disabled', true);

                }
            });
            // this.steps[pIndex].validationForm = pIndex;
        };


        this.manipulateUIBySubmitStart = function () {

            this.scope.global.isLoading = true;


        };

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

        this.submitForm = function (pMode) {


            this.manipulateUIBySubmitStart();


            if (pMode == "Test") {
                this.tool.isTestWA = "true";
            } else {
                this.tool.isTestWA = "false";

            }

            var lUserName = TibpService.getUserName();
            if (lUserName || lUserName.length == 0) {
                lUserName = "dominik.heim@walter-tools.com";
            }
            this.tool.Username = lUserName;


            var lCustomerNumber = TibpService.getCustomerNumber();
            if (lCustomerNumber || lCustomerNumber.length == 0) {
                lCustomerNumber = "133583";
            }
            this.tool.CustomerName = "AMB Stuttgart";

            this.tool.CustomerId = lCustomerNumber;
            this.tool.CustomerStreet = "TestStreet";
            this.tool.CustomerZipAndCity = "TestCity";

            this.tool.CustomerCountry = "DE";
            this.tool.customerGroupUser = "Normal";
            this.tool.formName = this.tool.toolName;
            this.tool.salesUnitID = "";


            var lThat = this;
            var lPromise = WebRequestService.requestBackend("FormSubmit", this.tool);


            lPromise.then(
                function (answer) {

                    lThat.scope.global.isLoading = false;

                    $mdDialog.show({
                        controller: SubmitDialogController,
                        templateUrl: '/wp-content/plugins/finelo/app/core/wizard/view/wizardsubmitdialog.html',
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

                    lThat.scope.global.isLoading = false;
                    $mdDialog.show({
                        controller: SubmitDialogController,
                        templateUrl: '/wp-content/plugins/finelo/app/core/wizard/view/wizardsubmitdialog.html',
                        parent: angular.element(document.body),
                        targetEvent: error,
                        clickOutsideToClose: false
                    })
                        .then(function (answer) {
                       console.log("dialog1");
                        }, function () {
                           console.log("dialog2");
                        });

                },

                function (progress) {
                    lThat.scope.global.isLoading = false;


                });

        }
            this.addWizardStep = function (pName, pDescription, pHref, pValidationForm) {

                this.steps.push({name: pName, description: pDescription, href: pHref, validationForm: pValidationForm});

                /*
                 $scope.$watch( pValidationForm + '.$valid', function(validity) {
                 console.log('form is: ');


                 });
                 */

            };

            /**
             * Defines the current wizardStep
             * @type {number}
             */
            this.slickCurrentIndex = 0;

            var lThat = this;

            this.slickConfig = {
                initialSlide: 0,
                swipe: false,
                centerPadding: '60px',
                nextArrow: '<button type="button" class="slick-next">Next</button>' +
                '<a class="btn btn-success slickSubmit slickProd hidden" style="display: none"><i class="fa fa-paper-plane"></i></a>' +
                '<a class="btn btn-success slickSubmit slickTest hidden" style="display: none"><i class="fa fa-paper-plane"></i></a>' +
                '<input type="hidden" name="submitType" id="submitType" />' +
                '<script>$(".slickTest").click(function(event) {$("#submitType").val("Test")});</script>' +
                '<script>$(".slickProd").click(function(event) {$("#submitType").val("Prod")});</script>'
                ,
                method: {},
                event: {
                    beforeChange: function (event, slick, currentSlide, nextSlide) {

                        if (currentSlide + 1 == slick.$slides.length && nextSlide == 0) {

                            var lSubmitValue = $("#submitType").val();
                            lThat.submitForm(lSubmitValue);
                        }

                    },
                    afterChange: function (event, slick, currentSlide, nextSlide) {
                        lThat.slickCurrentIndex = currentSlide;
                        $location.hash('toolPreview1');
                        $anchorScroll();
                        $(".slickSubmit").removeClass("hidden");

                        if (lThat.steps.length == lThat.slickCurrentIndex + 1) {

                            $(".slick-next").hide();
                            $(".slickSubmit").show();

                        } else {
                            $(".slick-next").show();
                            $(".slickSubmit").hide();

                        }
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

        };


        /**
         * Constructor, with class name
         */

        /**
         * Return the constructor function
         */
        return Wizard;


    }
    ]);