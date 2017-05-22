<?php

/*
Plugin Name: Fineloo Plugin
Plugin URI: https://bueltge.de/
Description: Plugin zur Einbettung des Bewertungsformular in Wordpress
Version: 1.0
Author: Dominik Heim
Author URI: http://www.heim-tech.de
Min WP Version: 1.5
*/

require_once dirname( __FILE__ ) . '/options.php';
//require_once dirname( __FILE__ ) . '/formSubmit.php';

wp_enqueue_script('jquery', 'app/bower_components/jquery/dist/jquery.js', null, null, false);
wp_enqueue_script('fineloo_main', plugin_dir_url(__FILE__) . 'scripts/fineloo_main.js', array('jquery'), null, false);
wp_enqueue_script('html-boilswe', plugin_dir_url(__FILE__) . 'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js', null, false);
//wp_enqueue_script('fineloo_main', 'http://192.168.218.1:8080/target/target-script-min.js#anonymous', array('jquery'), null, false);

wp_enqueue_style( 'css-normalize', plugins_url( 'app/bower_components/html5-boilerplate/dist/css/normalize.css', __FILE__ ));
wp_enqueue_style( 'ui-bootstrap', plugins_url( 'app/bower_components/angular-bootstrap/ui-bootstrap-csp.css', __FILE__ ));
wp_enqueue_style( 'angular-material', plugins_url( 'app/bower_components/angular-material/angular-material.min.css', __FILE__ ));
wp_enqueue_style( 'rz-slider', plugins_url( 'app/bower_components/angularjs-slider/dist/rzslider.min.css', __FILE__ ));
wp_enqueue_style( 'slick-carousel', plugins_url( 'app/bower_components/slick-carousel/slick/slick.css', __FILE__ ));
wp_enqueue_style( 'slick-theme', plugins_url( 'app/bower_components/slick-carousel/slick/slick-theme.css', __FILE__ ));


wp_enqueue_style( 'bootstrap-style', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
wp_enqueue_style( 'bootstrap-style2', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css');


wp_enqueue_script('angular', plugin_dir_url(__FILE__) . 'app/bower_components/angular/angular.js', array('jquery'), null, true);
wp_enqueue_script('angular-rz-slider', plugin_dir_url(__FILE__) . 'app/bower_components/angularjs-slider/dist/rzslider.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-route', plugin_dir_url(__FILE__) . 'app/bower_components/angular-route/angular-route.js', array('jquery'), null, true);
wp_enqueue_script('angular-sanitize', plugin_dir_url(__FILE__) . 'app/bower_components/angular-sanitize/angular-sanitize.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-animate', plugin_dir_url(__FILE__) . 'app/bower_components/angular-animate/angular-animate.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-bootsrap', plugin_dir_url(__FILE__) . 'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-messages', plugin_dir_url(__FILE__) . 'app/bower_components/angular-messages/angular-messages.js', array('jquery'), null, true);
wp_enqueue_script('angular-aria', plugin_dir_url(__FILE__) . 'app/bower_components/angular-aria/angular-aria.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-material', plugin_dir_url(__FILE__) . 'app/bower_components/angular-material/angular-material.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-bootstrap1', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array('jquery'), null, true);


wp_enqueue_script('fineloo_app_logic', plugin_dir_url(__FILE__) . 'app/app.js', array('jquery'), null, true);
wp_enqueue_script('fineloo_immobewertung', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/ImmobilienBewertungCtrl.js', array('jquery'), null, true);
wp_enqueue_script('fineloo_renovierung',plugin_dir_url(__FILE__) .  'app/steps/BauRenovierungskosten/BaurenovierungCtrl.js', array('jquery'), null, true);

wp_enqueue_script('versionjs',plugin_dir_url(__FILE__) .  'app/components/version/version.js', array('jquery'), null, true);
wp_enqueue_script('versiondirectivejs',plugin_dir_url(__FILE__) .  'app/components/version/version-directive.js', array('jquery'), null, true);
wp_enqueue_script('versioninterpolatejs',plugin_dir_url(__FILE__) .  'app/components/version/interpolate-filter.js', array('jquery'), null, true);


wp_enqueue_script('slick-carousel',plugin_dir_url(__FILE__) .  'app/bower_components/slick-carousel/slick/slick.min.js', array('jquery'), null, true);
wp_enqueue_script('angular-slick-carousel',plugin_dir_url(__FILE__) .  'app/bower_components/angular-slick-carousel/dist/angular-slick.min.js', array('jquery'), null, true);
wp_enqueue_script('slick-controller',plugin_dir_url(__FILE__) .  'app/slick/controller/slickCtrl.js', array('jquery'), null, true);


add_shortcode('fineloo_ask', 'fineloo_get_ask');
add_shortcode('fineloo_ask2', 'fineloo_get_ask2');
add_shortcode('fineloo_bewertung', 'fineloo_get_bewertung');
add_shortcode('fineloo_baukosten', 'fineloo_get_baukosten');
add_shortcode('fineloo_finanzierung', 'fineloo_get_finanzierung');
add_shortcode('fineloo_privatkredit', 'fineloo_get_privatkredit');
add_shortcode('fineloo_immobilienverkauf', 'fineloo_get_immobilienverkauf');



add_action( 'wp_footer', 'fineloo_respond_to_ask' );

/*
Sets the ask field where client is asked for what he wants
 Immobilienbewertung, Kontakt , etc
 */



 function fineloo_get_baukosten()

 {


return '<div ng-app="Fineloo" class="finelooApp">'.
'<div ng-controller="FinelooCtrl" id="FinelooBody" ng-cloak>'.
'<input type="text" ng-show="false" name="formMode" ng-init="formMode=4" ng-model="formMode">'.
'<div id="content" class="col-xs-12" ng-view></div></div></div>';


}

 function fineloo_get_finanzierung()

 {


return '<div ng-app="Fineloo" class="finelooApp">'.
'<div ng-controller="FinelooCtrl" id="FinelooBody" ng-cloak>'.
'<input type="text" ng-show="false" name="formMode" ng-init="formMode=3" ng-model="formMode">'.
'<div id="content" class="col-xs-12" ng-view></div></div></div>';


}

function fineloo_get_immobilienverkauf()

 {


return '<div ng-app="Fineloo" class="finelooApp">'.
'<div ng-controller="FinelooCtrl" id="FinelooBody" ng-cloak>'.
'<input type="text" ng-show="false" name="formMode" ng-init="formMode=6" ng-model="formMode">'.
'<div id="content" class="col-xs-12" ng-view></div></div></div>';


}

 function fineloo_get_privatkredit()

 {


return '<div ng-app="Fineloo" class="finelooApp">'.
'<div ng-controller="FinelooCtrl" id="FinelooBody" ng-cloak>'.
'<input type="text" ng-show="false" name="formMode" ng-init="formMode=5" ng-model="formMode">'.
'<div id="content" class="col-xs-12" ng-view></div></div></div>';


}

 function fineloo_get_bewertung()

 {

return '<div ng-app="Fineloo" class="finelooApp">'.
'<div ng-controller="FinelooCtrl" id="FinelooBody" ng-cloak>'.
'<input type="text" ng-show="false" name="formMode" ng-init="formMode=2" ng-model="formMode">'.
'<div id="content" class="col-xs-12" ng-view></div></div></div>';

}

function fineloo_get_ask()

{


   return '<select id="fineloo_ask" class="wizard-select">'.
                         '<option value="null">Bitte wählen</option>'.
                      '<option value="bewertung">Immobilienbewertung</option>'.
                      '<option value="finanzierung">Baufinanzierung</option>'.
                      '<option value="renovierung">Bau- und Renovierungskosten</option>'.
                      '<option value="privatkredit">Privatkredit</option>'.

                  '</select>';




}




function fineloo_respond_to_ask()

{

$optionPageID1 = get_option("fin_settings", "Option gibts nicht");
$permaBewertung = get_permalink( $optionPageID1["pageIDImmoblienbewertung"], false );
$permaFinanzierung = get_permalink( $optionPageID1["pageIDBaufinanzierung"], false );
$permaBaukosten = get_permalink( $optionPageID1["pageIDBauUndRenovierungskosten"], false );
$permaPrivatkredit = get_permalink( $optionPageID1["pageIDPrivatkredit"], false );






echo ("<script>jQuery(document).ready(function() {".
      "jQuery('#fineloo_ask').change(function() {".

        " var lValue = jQuery('#fineloo_ask').val();".
        "  if(lValue == 'bewertung') {".
         "     window.location.href = '". $permaBewertung ."#main';".
         " }".
        "  if(lValue == 'finanzierung') {".
         "     window.location.href = '". $permaFinanzierung ."#main';".

        "  }".
         "  if(lValue == 'privatkredit') {".
                 "     window.location.href = '". $permaPrivatkredit ."#main';".

                "  }".
        "  if(lValue == 'renovierung') {".
        "      window.location.href = '". $permaBaukosten ."#main';".

        "  }});});</script>");




}



wp_enqueue_style( 'xpon_main', plugins_url( '/styles/xpon-main.css', __FILE__ ));




?>