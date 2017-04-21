<?php

require_once("../../../wp-load.php");

//echo "Hallo";
$data = json_decode(file_get_contents("php://input"), true);


//bewertung, finanzierung oder renovierung
$anfrageArt = $data["anfrageart"];

echo var_dump($anfrageArt);

//1 - IMMOBEWERTUNG

//Haus, Wohnung oder Grundstück
$wertObjekt = $data["wertObjekt"];
//Vermietet, Eigennutzung, Sonstiges
$nutzungsArt = $data["nutzungsart"];
// Groeße des Grundstuecks
$grundStueckGroesse = $data["grundstueckGroesse"];
// Wohnflaeche
$wohnflaeche = $data["wohnflaeche"];

// Stellplatz
$stellplatz = $data["stellplatz"];
//Stockwerke
$stockwerke = $data["stockwerke"];

//HAUS
$hausArt = $data["hausArt"];
//Baujahr des Gebäudes
$baujahr = $data["baujahr"];
// Transaktion - Kaufen oder Verkaufen?
$transaktion = $data["transaktion"];
// Wohnungsart
$wohnungsArt = $data["wohnungsArt"];
// Zimemrzahl
$zimmerZahl = $data["zimmerZahl"];


// 2 - KONTAKT

//EMAIL
$email = $data["email"];
//Vorname
$vorname = $data["vorname"];
//Nachname
$nachname = $data["nachname"];
// PLZ
$plz = $data["plz"];
// TELEFON
$telefon = $data["telefon"];

// 3 - BUND UND RENOVIERUNGSKOSTEN

// Neubau oder Renovierung
$bauArt = $data["bauArt"];
// Art des Hauses
$hausArtRenovierung = $data["hausArtRenovierung"];
// Keller - gefragt für Renovierung und Neubau
$keller = $data["keller"];

$lagePLZ = $data["immoPLZ"];
$lageStrasse  = $data["immoLage"];
$besonderheit = $data["besonderheit"];

$mail_body = "Sie haben eine Kontaktanfrage erhalten\r\n\r\n";

$mail_body = $mail_body . "Anfragegrund: " . $anfrageArt . "\r\n\r\n";

$mail_body = $mail_body . "Von: \r\n";
$mail_body = $mail_body . "Vorname: " . $vorname . " \r\n";
$mail_body = $mail_body . "Nachname:" . $nachname . " \r\n";
$mail_body = $mail_body . "EMail: " . $email . " \r\n";
$mail_body = $mail_body . "Telefon: " . $telefon . " \r\n";
$mail_body = $mail_body . "Plz: " . $plz . "\r\n";

$mail_body = $mail_body . "\r\nAnfragedaten: \r\n\r\n";

if ($anfrageArt == "bewertung") {

    $mail_body = $mail_body . "Objekt: " . $wertObjekt . " \r\n";


            $mail_body = $mail_body . "Lage PLZ: " . $lagePLZ . " \r\n";
            $mail_body = $mail_body . "Lage Straße: " . $lageStrasse . " \r\n";
            $mail_body = $mail_body . "Besonderheit: " . $besonderheit . " \r\n";


    if ($wertObjekt == 'Wohnung' || $wertObjekt == 'Haus') {

        $mail_body = $mail_body . "Nutzungsart: " . $nutzungsArt . " \r\n";
        $mail_body = $mail_body . "Zimmerzahl: " . $zimmerZahl . " \r\n";
        $mail_body = $mail_body . "Wohnflaeche: " . $wohnflaeche . " \r\n";
    }

    if ($wertObjekt == 'Grundstueck' || $wertObjekt == 'Haus') {
        $mail_body = $mail_body . "GrundstueckGroesse: " . $grundStueckGroesse . " \r\n";

    }


    if ($wertObjekt == 'Haus') {
        $mail_body = $mail_body . "Stellplatz: " . $stellplatz . " \r\n";
        $mail_body = $mail_body . "Stockwerke: " . $stockwerke . " \r\n";
        $mail_body = $mail_body . "Hausart: " . $hausArt . " \r\n";
        $mail_body = $mail_body . "Baujahr: " . $baujahr . " \r\n";

    }

    if ($wertObjekt == 'Wohnung') {
        $mail_body = $mail_body . "Wohnungsart: " . $wohnungsArt . " \r\n";
    }


    $mail_body = $mail_body . "Transaktion: " . $transaktion . " \r\n";

}


if ($anfrageArt == "renovierung") {

    $mail_body = $mail_body . "Art: " . $bauArt . " \r\n";
    $mail_body = $mail_body . "Hausart: " . $hausArtRenovierung . " \r\n";
    $mail_body = $mail_body . "GrundstueckGroesse: " . $grundStueckGroesse . " \r\n";
    $mail_body = $mail_body . "Wohnflaeche: " . $wohnflaeche . " \r\n";
    $mail_body = $mail_body . "Zimmerzahl: " . $zimmerZahl . " \r\n";
    $mail_body = $mail_body . "Stellplatz: " . $stellplatz . " \r\n";
    $mail_body = $mail_body . "Stockwerke: " . $stockwerke . " \r\n";
    $mail_body = $mail_body . "Hausart: " . $hausArt . " \r\n";
    $mail_body = $mail_body . "Wohnungsart: " . $wohnungsArt . " \r\n";
    $mail_body = $mail_body . "Baujahr: " . $baujahr . " \r\n";
    $mail_body = $mail_body . "Transaktion: " . $transaktion . " \r\n";

}

echo var_dump($data);

$options = get_option("fin_settings", "Option gibts nicht");

echo var_dump($options);

wp_mail($options["email"], "Kontaktanfrage", $mail_body);


?>


