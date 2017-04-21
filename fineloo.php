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


add_shortcode('fineloo_ask', 'fineloo_get_ask');
add_shortcode('fineloo_ask2', 'fineloo_get_ask2');
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


    return '<iframe class="finelooframe" width="100%" height="700px" src="'  . plugin_dir_url(__FILE__)  . 'app/index.html?formMode=4&submitPage=' . plugin_dir_url(__FILE__) . 'formSubmit.php' . '"></iframe>';


}

 function fineloo_get_finanzierung()

 {


    return '<iframe class="finelooframe" width="100%" height="700px" src="'  . plugin_dir_url(__FILE__)  . 'app/index.html?formMode=3&submitPage=' . plugin_dir_url(__FILE__) . 'formSubmit.php' . '"></iframe>';


}

 function fineloo_get_bewertung()

 {


    return '<iframe class="finelooframe" width="100%" height="700px" src="'  . plugin_dir_url(__FILE__)  . 'app/index.html?formMode=2&submitPage=' . plugin_dir_url(__FILE__) . 'formSubmit.php' . '"></iframe>';


}

function fineloo_get_ask()

{


   return '<select id="fineloo_ask" class="wizard-select">'.
                         '<option value="null">Bitte wählen</option>'.
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
         "     window.location.href = '". $permaBewertung ."#main';".
         " }".
        "  if(lValue == 'finanzierung') {".
         "     window.location.href = '". $permaFinanzierung ."#main';".

        "  }".
        "  if(lValue == 'renovierung') {".
        "      window.location.href = '". $permaBaukosten ."#main';".

        "  }});});</script>");




}





?>