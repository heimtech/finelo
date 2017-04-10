<?php
add_action( 'admin_menu', 'fin_add_admin_menu' );
add_action( 'admin_init', 'fin_settings_init' );


function fin_add_admin_menu(  ) {

	add_menu_page( 'Fineloo', 'Fineloo', 'manage_options', 'fineloo', 'fin_options_page' );

}


function fin_settings_init(  ) {

	register_setting( 'pluginPage', 'fin_settings' );

	add_settings_section(
		'fin_pluginPage_section',
		__( 'Fineloo Immobilienbewertung Einstellungen', 'wordpress' ),
		'fin_settings_section_callback',
		'pluginPage'
	);

	add_settings_field(
		'fineloo_pageid_immobilienbewertung',
		__( 'Page ID für Immobilienbewertung', 'wordpress' ),
		'fin_text_field_0_render',
		'pluginPage',
		'fin_pluginPage_section'
	);

	add_settings_field(
		'fineloo_pageid_baufinanzierung',
		__( 'Page ID für Baufinanzierungsberatung', 'wordpress' ),
		'fin_text_field_1_render',
		'pluginPage',
		'fin_pluginPage_section'
	);

	add_settings_field(
		'fineloo_pageid_baukosten',
		__( 'Page ID für Bau- und Renovierungskosten', 'wordpress' ),
		'fin_text_field_2_render',
		'pluginPage',
		'fin_pluginPage_section'
	);

	add_settings_field(
		'fineloo_email',
		__( 'Empfangs-Email', 'wordpress' ),
		'fin_text_field_3_render',
		'pluginPage',
		'fin_pluginPage_section'
	);

	add_settings_field(
		'fineloo_smtp',
		__( 'SMTP Server', 'wordpress' ),
		'fin_text_field_4_render',
		'pluginPage',
		'fin_pluginPage_section'
	);


}


function fin_text_field_0_render(  ) {

	$options = get_option( 'fin_settings' );
	?>
	<input type='text' name='fin_settings[pageIDImmoblienbewertung]' value='<?php echo $options['pageIDImmoblienbewertung']; ?>'>
	<?php

}


function fin_text_field_1_render(  ) {

	$options = get_option( 'fin_settings' );
	?>
	<input type='text' name='fin_settings[pageIDBaufinanzierung]' value='<?php echo $options['pageIDBaufinanzierung']; ?>'>
	<?php

}


function fin_text_field_2_render(  ) {

	$options = get_option( 'fin_settings' );
	?>
	<input type='text' name='fin_settings[pageIDBauUndRenovierungskosten]' value='<?php echo $options['pageIDBauUndRenovierungskosten']; ?>'>
	<?php

}


function fin_text_field_3_render(  ) {

	$options = get_option( 'fin_settings' );
	?>
	<input type='text' name='fin_settings[email]' value='<?php echo $options['email']; ?>'>
	<?php

}


function fin_text_field_4_render(  ) {

	$options = get_option( 'fin_settings' );
	?>
	<input type='text' name='fin_settings[smtpserver]' value='<?php echo $options['smtpserver']; ?>'>
	<?php

}


function fin_settings_section_callback(  ) {

	echo __( 'Hier können Sie die Einstellungen für das Plugin vornehmen. Die Page IDs für ', 'wordpress' );

}


function fin_options_page(  ) {

	?>
	<form action='options.php' method='post'>

		<h2>Fineloo</h2>

		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>

	</form>
	<?php

}

?>