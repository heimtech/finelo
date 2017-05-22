'use strict';

var lApplication = angular.module('Fineloo')


    .controller('ImmobilienbewertungCtrl', ['$scope' , function ($scope) {


        $scope.goToNutzungsArt =  function() {

            try {

                    $scope.slickConfigBewertung.method.slickNext();

            }
            catch (e)  {

            }
        }




    }]);



/*

 >> 1.       Auswahl

 >>

 >> -          Neubau

 >>

 >> -          Renovierung

 >>

 >>

 >>

 >> für Neubau folgen folgende Auswahlmöglichkeiten

 >>

 >> 2.       Auswahl

 >>

 >>

 >>

 >> -          Einfamilienhaus

 >>

 >> -          Doppelhaushälfte

 >>

 >>

 >>

 >> 3.       Auswahl

 >>

 >> -          Wohnfläche

 >>

 >>

 >>

 >> 4.       Auswahl

 >>

 >> -          Stockwerke

 >>

 >>

 >>

 >> 5.       Auswahl

 >>

 >> -          Keller

 >>

 >>

 >>

 >> 6.       Auswahl

 >>

 >> -          Garage

 >>

 >>

 >>

 >> 7.       Auswahl

 >>

 >> -          PLZ / Ort

 >>

 >>

 >>

 >> 8.       Auswahl

 >>

 >> -          Kontakt

 >>

 >>

 >>

 >> Bei Renovierung

 >>

 >>

 >>

 >> WOHNUNG kommt Auswahl 4, 5, 8, 9



 */


lApplication.controller('ImmobilienArtCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "ImmobilienArt" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.wertObjekt", items: [  {name: "Haus", value: "Haus" , imageName: 'haus.png' }, {name: "Wohnung", value: "Wohnung" , imageName: 'wohnung.png' },{name: "Grundstück", value: "Grundstueck" , imageName: 'grundstueck.png' }]};


        $scope.$watch('wertForm.wertObjekt', function (newValue) {

            if(newValue == 'Haus' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

            if(newValue == 'Wohnung' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

            if(newValue == 'Grundstueck' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }
        });




    }]);

lApplication.controller('FlaechenCtrl', ['$scope' , function ($scope) {


    $scope.FlaecheTitle = "Wie groß ist die Grundstücksfläche?";
    $scope.imageStep1 = "/wp-content/plugins/finelo/assets/img/wohnflaeche.png";
    $scope.imageStep2 = "/wp-content/plugins/finelo/assets/img/grundstueck.png";
    $scope.imageStep3 = "/wp-content/plugins/finelo/assets/img/zimmer.png";


    //Slider with draggable range
    $scope.slider_grundstueck = {
        value: 100,
        options: {
            floor: 0,
            ceil: 2500,
            step: 50
        }
    };

    //Slider with draggable range
    $scope.slider_wohnflaeche = {

        value: 50,
        options: {
            floor: 0,
            ceil: 500,
            step: 2
        }
    };

    //Slider with draggable range
    $scope.slider_zimmer = {

        value: 3,
        options: {
            floor: 1,
            ceil: 10,
            step: 1
        }
    };



    $scope.$watch('slider_wohnflaeche.value', function (newValue) {

        $scope.wertForm.wohnflaeche = newValue;
    });


    $scope.$watch('slider_grundstueck.value', function (newValue) {

        $scope.wertForm.grundstueckGroesse = newValue;
    });

    $scope.$watch('slider_zimmer.value', function (newValue) {

        $scope.wertForm.zimmerZahl = newValue;
    });

    $scope.delegateNextSlide = function() {

        try {
            $scope.slickConfigBewertung.method.slickNext();

        }
        catch (e)  {

        }


    }


}]);

lApplication.controller('HausArtCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "HausArt" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.hausArt", items: [  {name: "Einfamilienhaus", value: "einfamilienhaus" , imageName: 'haus.png' }, {name: "Mehrfamilienhaus", value: "mehrfamilien" , imageName: 'wohnung.png' },{name: "Doppelhaushälfte", value: "doppelhaushaelfte" , imageName: 'doppelhaushaelfte.png' },{name: "Mittel-Reihenhaus", value: "Mittel-Reihen-Haus" , imageName: 'reihenmittelhaus.png' } ,{name: "End-Reihenhaus", value: "End-Reihenhaus" , imageName: 'reihenendhaus.png' }, {name: "Bungalow", value: "Bungalow" , imageName: 'bungalow.png' }]};



    $scope.$watch('wertForm.hausArt', function (newValue) {


        try {
            if(newValue != undefined && newValue != "") {
                $scope.slickConfigBewertung.method.slickNext();
            }
        }
        catch (e) {

        }


    });



}]);




    lApplication.controller('KaufenCtrl', ['$scope' , function ($scope) {


        $scope.selectionGroup = {name: "Kaufen" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.transaktion", items: [  {name: "Kaufen", value: "Kaufen" , imageName: 'kaufen.png' }, {name: "Verkaufen", value: "Verkaufen" , imageName: 'verkaufen.png' }]};


        $scope.$watch('wertForm.transaktion', function (newValue) {

            if($scope.wertForm.wertObjekt == 'Haus' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

            if($scope.wertForm.wertObjekt == 'Wohnung' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

            if($scope.wertForm.wertObjekt == 'Grundstueck' ) {

                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }
        });






    }]);

lApplication.controller('NutzungsartCtrl', ['$scope' , function ($scope) {

    $scope.selectionGroup = {name: "Nutzungsart" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.nutzungsart", items: [  {name: "Vermietet", value: "Vermietet" , imageName: 'vermietet.png' }, {name: "Eigennutzung", value: "Eigennutzung" , imageName: 'familie.png' },{name: "Sonstiges", value: "Sonstiges" , imageName: 'sonstige.png' }]};


    $scope.goPrevNutzungsArt = function() {

        try {
            if($scope.wertForm.wertObjekt == "Wohnung") {
                $scope.slickConfigBewertung.method.slickPrev();
            }

            if($scope.wertForm.wertObjekt == "Haus") {
                $scope.slickConfigBewertung.method.slickPrev();

            }

        }
        catch (e)  {

        }

    }


    $scope.$watch('wertForm.nutzungsart', function (newValue) {

        try {
            if(newValue != undefined && newValue != "") {
                $scope.slickConfigBewertung.method.slickNext();
            }            }
        catch (e)  {

        }

    });




}]);



'use strict';



    lApplication.controller('StellplatzCtrl', ['$scope' , function ($scope) {

        $scope.selectionGroup = {name: "Nutzungsart" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.stellplatz", items: [  {name: "Garage", value: "Garage" , imageName: 'garage.png' }, {name: "Carport", value: "Carport" , imageName: 'carport.png' },{name: "Im Freien", value: "Im-Freien" , imageName: 'imfreien.png' }, {name: "Kein Stellplatz", value: "Kein-Stellplatz" , imageName: 'keinstellplatz.png' }]};


        $scope.$watch('wertForm.stellplatz', function (newValue) {



            if($scope.formMode == 2) {
                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigBewertung.method.slickNext();
                    }                }
                catch (e)  {

                }

            }

            if($scope.formMode == 4) {
                try {
                    if(newValue != undefined && newValue != "") {
                        $scope.slickConfigRenovierung.method.slickNext();
                    }                }
                catch (e)  {

                }
            }

        });





    }]);


lApplication.controller('KaufenCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "Kaufen" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.transaktion", items: [  {name: "Kaufen", value: "Kaufen" , imageName: 'kaufen.png' }, {name: "Verkaufen", value: "Verkaufen" , imageName: 'verkaufen.png' }]};


    $scope.$watch('wertForm.transaktion', function (newValue) {

        if($scope.wertForm.wertObjekt == 'Haus' ) {

            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigBewertung.method.slickNext();
                }                         }
            catch (e)  {

            }
        }

        if($scope.wertForm.wertObjekt == 'Wohnung' ) {

            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigBewertung.method.slickNext();
                }
            }
            catch (e)  {

            }
        }

        if($scope.wertForm.wertObjekt == 'Grundstueck' ) {

            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigBewertung.method.slickNext();
                }                         }
            catch (e)  {

            }
        }
    });




}]);

lApplication.controller('StockwerkCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "Stockwerke" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.stockwerke", items: [  {name: "1 Stockwerk", value: "1-Stockwerk" , imageName: '1Stock.png' }, {name: "2 Stockwerke", value: "2-Stockwerke" , imageName: '2Stock.png' }, {name: "3 und mehr", value: "3-Stockwerke-oder-mehr" , imageName: '3.png' }]};


    $scope.$watch('wertForm.stockwerke', function (newValue) {

        if($scope.formMode == 2) {
            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigBewertung.method.slickNext();
                }                }
            catch (e)  {

            }

        }

        if($scope.formMode == 4) {
            try {
                if(newValue != undefined && newValue != "") {
                    $scope.slickConfigRenovierung.method.slickNext();
                }                }
            catch (e)  {

            }
        }



    });




}]);

lApplication.controller('WohnungsArtCtrl', ['$scope' , function ($scope) {


    $scope.selectionGroup = {name: "Wohnungsart" , listClasses: "col-sm-6 col-md-4" ,  sectionBootstrapClasses: "col-sm-12", modelName: "wertForm.wohnungsArt", items: [  {name: "Souterrain", value: "Souterrain" , imageName: 'check.png' }, {name: "Erdgeschosswohnung", value: "Erdgeschosswohnung" , imageName: 'check.png' },{name: "Etagenwohnung", value: "Etagenwohnung" , imageName: 'check.png' },{name: "Dachgeschosswohnung", value: "Dachgeschosswohnung" , imageName: 'check.png' } ,{name: "Maisonette", value: "Maisonette" , imageName: 'check.png' }, {name: "Loft", value: "Loft" , imageName: 'check.png' }]};



    $scope.$watch('wertForm.wohnungsArt', function (newValue) {


        try {
            if(newValue != undefined && newValue != "") {
                $scope.slickConfigBewertung.method.slickNext();
            }

        }
        catch (e) {

        }


    });



}]);

lApplication.controller('LageCtrl', ['$scope' , function ($scope) {

    $scope.submitValue = "Hallo";

    this.submitFormDirect = function () {
        alert("hallo");
    }





}]);