<?php
//define('WP_USE_THEMES', true);
//include('../../../wp-load.php');
//require ('../../../wp-blog-header.php');
//include('functions.php');
require_once("../../../wp-load.php");

echo "Hallo";
$data = json_decode(file_get_contents('php://input'), true);

$anfrageArt = $data[anfrageArt];
echo var_dump($data);

$options = get_option("fin_settings", "Option gibts nicht");

echo var_dump($options);

wp_mail( "dominik@heim-tech.de", "Kontaktanfrage", "Jetzt");


?>
