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


wp_enqueue_script('fineloo_main', plugin_dir_url(__FILE__) . 'scripts/fineloo_main.js', array('jquery'));
wp_enqueue_script('fineloo_less', plugin_dir_url(__FILE__) . 'app/bower_components/less/dist/less.min.js');
wp_register_style( 'fineloo-style', plugins_url( '/styles/xpon-main.less', __FILE__ ), array(), '20120208', 'all' );
add_shortcode('fineloo_ask', 'fineloo_get_ask');

add_action( 'wp_footer', 'fineloo_respond_to_ask' );

/*
Sets the ask field where client is asked for what he wants
 Immobilienbewertung, Kontakt , etc
 */

function fineloo_get_ask()

{

$optionPageID1 = get_option("fin_settings", "Option gibts nicht");

echo var_dump($optionPageID1);
   return '<select id="fineloo_ask" class="wizard-select">'.
                         '<option value="null">Wie können wir helfen?</option>'.
                      '<option value="bewertung">Immobilienbewertung</option>'.
                      '<option value="finanzierung">Baufinanzierung</option>'.
                      '<option value="renovierung">Bau- und Renovierungskosten</option>'.
                  '</select>';




}


function fineloo_respond_to_ask()

{



echo ("<script>jQuery(document).ready(function() {".
      "jQuery('#fineloo_ask').change(function() {".

        " var lValue = jQuery('#fineloo_ask').val();".
        "  if(lValue == 'bewertung') {".
         "     window.location.href = 'immobilien-bewertung-region-augsburg';".
         " }".
        "  if(lValue == 'finanzierung') {".
         "     window.location.href = 'www.google.de?searchTerm=finanzierungUpfla';".

        "  }".
        "  if(lValue == 'renovierung') {".
        "      window.location.href = 'bau-renovierung-kosten-region-augsburg';".

        "  }});});</script>");




}





?>