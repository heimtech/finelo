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

wp_enqueue_script('fineloo_main', plugin_dir_url(__FILE__) . 'scripts/fineloo_main.js', array('jquery'));




// STYLES
/*
wp_enqueue_style( 'css_normalize', plugin_dir_url(__FILE__) . 'app/bower_components/html5-boilerplate/dist/css/normalize.css');
wp_enqueue_style( 'css_normalize_main', plugin_dir_url(__FILE__) . 'app/bower_components/html5-boilerplate/dist/css/main.css');
wp_enqueue_style( 'css_bootstrap_csp', plugin_dir_url(__FILE__) . 'app/bower_components/angular-bootstrap/ui-bootstrap-csp.css');
wp_enqueue_style( 'css_angular__material', plugin_dir_url(__FILE__) . 'app/bower_components/angular-material/angular-material.min.css');
wp_enqueue_style( 'css_rzslider', plugin_dir_url(__FILE__) . 'app/bower_components/angularjs-slider/dist/rzslider.min.css');
wp_enqueue_style( 'css_slick', plugin_dir_url(__FILE__) . 'app/bower_components/slick-carousel/slick/slick.css');
wp_enqueue_style( 'css_slick_theme', plugin_dir_url(__FILE__) . 'app/bower_components/slick-carousel/slick/slick-theme.css');
wp_enqueue_style( 'css_blue_icheck', plugin_dir_url(__FILE__) . 'app/bower_components/iCheck/skins/square/blue.css');
wp_enqueue_style( 'css_fineloo_main', plugin_dir_url(__FILE__) . 'styles/xpon-main.css');

wp_enqueue_style( 'css_bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
wp_enqueue_style( 'css_bootstrap_theme', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css');


wp_enqueue_script('modernizr', plugin_dir_url(__FILE__) . 'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js');
wp_enqueue_script('font_awesome', 'https://use.fontawesome.com/0e2e7c118a.js');
wp_enqueue_script('angular', plugin_dir_url(__FILE__) . 'app/bower_components/angular/angular.js');
wp_enqueue_script('rzslider', plugin_dir_url(__FILE__) . 'app/bower_components/angularjs-slider/dist/rzslider.min.js');
wp_enqueue_script('angular-slick', plugin_dir_url(__FILE__) . 'app/bower_components/angular-slick-carousel/dist/angular-slick.min.js');
wp_enqueue_script('angular-route', plugin_dir_url(__FILE__) . 'app/bower_components/angular-route/angular-route.js');
wp_enqueue_script('angular-sanitize', plugin_dir_url(__FILE__) . 'app/bower_components/angular-sanitize/angular-sanitize.min.js');
wp_enqueue_script('angular-animate', plugin_dir_url(__FILE__) . 'app/bower_components/angular-animate/angular-animate.min.js');
wp_enqueue_script('ui-bootstrap-tpls', plugin_dir_url(__FILE__) . 'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js');
//wp_enqueue_script('modernizr', plugin_dir_url(__FILE__) . 'app/bower_components/iCheck/icheck.min.js');
wp_enqueue_script('angular-messages', plugin_dir_url(__FILE__) . 'app/bower_components/angular-messages/angular-messages.js');
wp_enqueue_script('angular-aria', plugin_dir_url(__FILE__) . 'app/bower_components/angular-aria/angular-aria.min.js');
wp_enqueue_script('angular-material', plugin_dir_url(__FILE__) . 'app/bower_components/angular-material/angular-material.min.js');

wp_enqueue_script('modernizr', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
wp_enqueue_script('fineloo_app', plugin_dir_url(__FILE__) . 'app/app.js');
wp_enqueue_script('imageselectiongroup', plugin_dir_url(__FILE__) . 'app/core/framework/ui/imageselectiongroup/controller/imageselectiongroup.js');
wp_enqueue_script('slickCtrl', plugin_dir_url(__FILE__) . 'app/slick/controller/slickCtrl.js');
wp_enqueue_script('ImmobilienBewertungCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/ImmobilienBewertungCtrl.js');
wp_enqueue_script('ImmobilienArtCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/immobilienArt/controller/ImmobilienArtCtrl.js');
wp_enqueue_script('HausArtCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/hausArt/controller/HausArtCtrl.js');
wp_enqueue_script('WohnungsArtCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/wohnungsArt/controller/WohnungsArtCtrl.js');
wp_enqueue_script('FlaechenCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/flaechen/controller/FlaechenCtrl.js');
wp_enqueue_script('KaufenCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/kaufen/controller/KaufenCtrl.js');
wp_enqueue_script('StockwerkCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/stockwerke/controller/StockwerkCtrl.js');
wp_enqueue_script('NutzungsartCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/nutzungsart/NutzungsartCtrl.js');
wp_enqueue_script('StellplatzCtrl', plugin_dir_url(__FILE__) . 'app/steps/Immobilienbewertung/stellplatz/StellplatzCtrl.js');
wp_enqueue_script('BauArtCtrl', plugin_dir_url(__FILE__) . 'app/steps/BauRenovierungskosten/Bauart/controller/BauArtCtrl.js');
wp_enqueue_script('KontaktCtrl', plugin_dir_url(__FILE__) . 'app/steps/Baufinanzierung/Kontaktformular/KontaktCtrl.js');
wp_enqueue_script('angular_version', plugin_dir_url(__FILE__) . 'app/components/version/version.js');
wp_enqueue_script('angular_version_directive', plugin_dir_url(__FILE__) . 'app/components/version/version-directive.js');
wp_enqueue_script('angular_interpolate_filter', plugin_dir_url(__FILE__) . 'app/components/version/interpolate-filter.js');
*/

add_shortcode('fineloo_ask', 'fineloo_get_ask');
add_shortcode('fineloo_bewertung', 'fineloo_get_bewertung');
add_shortcode('fineloo_baukosten', 'fineloo_get_baukosten');
add_shortcode('fineloo_finanzierung', 'fineloo_get_finanzierung');

add_action( 'wp_footer', 'fineloo_respond_to_ask' );

/*
Sets the ask field where client is asked for what he wants
 Immobilienbewertung, Kontakt , etc
 */



 function fineloo_get_baukosten()

 {


    return '<iframe class="finelooframe" width="100%" height="700px" src="'  . plugin_dir_url(__FILE__)  . '/app/index.html?formMode=4&submitPage=' . plugin_dir_url(__FILE__) . 'formSubmit.php' . '"></iframe>';


}

 function fineloo_get_finanzierung()

 {


    return '<iframe class="finelooframe" width="100%" height="700px" src="'  . plugin_dir_url(__FILE__)  . '/app/index.html?formMode=3&submitPage=' . plugin_dir_url(__FILE__) . 'formSubmit.php' . '"></iframe>';


}

 function fineloo_get_bewertung()

 {


    return '<iframe class="finelooframe" width="100%" height="700px" src="'  . plugin_dir_url(__FILE__)  . '/app/index.html?formMode=2&submitPage=' . plugin_dir_url(__FILE__) . 'formSubmit.php' . '"></iframe>';


}

function fineloo_get_ask()

{


   return '<select id="fineloo_ask" class="wizard-select">'.
                         '<option value="null">Wie können wir helfen?</option>'.
                      '<option value="bewertung">Immobilienbewertung</option>'.
                      '<option value="finanzierung">Baufinanzierung</option>'.
                      '<option value="renovierung">Bau- und Renovierungskosten</option>'.
                  '</select>';




}


function fineloo_respond_to_ask()

{

$optionPageID1 = get_option("fin_settings", "Option gibts nicht");
$permaBewertung = get_permalink( $optionPageID1["pageIDImmoblienbewertung"], false );
$permaFinanzierung = get_permalink( $optionPageID1["pageIDBaufinanzierung"], false );
$permaBaukosten = get_permalink( $optionPageID1["pageIDBauUndRenovierungskosten"], false );






echo ("<script>jQuery(document).ready(function() {".
      "jQuery('#fineloo_ask').change(function() {".

        " var lValue = jQuery('#fineloo_ask').val();".
        "  if(lValue == 'bewertung') {".
         "     window.location.href = '". $permaBewertung ."';".
         " }".
        "  if(lValue == 'finanzierung') {".
         "     window.location.href = '". $permaFinanzierung ."';".

        "  }".
        "  if(lValue == 'renovierung') {".
        "      window.location.href = '". $permaBaukosten ."';".

        "  }});});</script>");




}





?>