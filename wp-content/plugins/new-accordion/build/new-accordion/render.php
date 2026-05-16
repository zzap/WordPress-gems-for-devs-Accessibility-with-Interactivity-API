<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generates a unique id for aria-controls.
$acc_id      = wp_unique_id('accordion-');
$acc_title   = $attributes['title'] ?? __( 'Accordion title', 'new-accordion' );
$acc_content = $attributes['content'] ?? __( 'Accordion content', 'new-accordion' );

// Adds the global state.
wp_interactivity_state(
	'gems',
	array(
		'currentButton'     => '+',
		'openedButton'      => '-',
		'closedButton'      => '+',
		'openedAccordionID' => null,
	)
);

$context = [
	'currentAccordionID' => $acc_id,
];
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="gems"
	<?php echo wp_interactivity_data_wp_context($context); ?>>

	<div class="accordion-item">
		<h3>
			<button
				id="<?php echo esc_attr( $acc_id ); ?>-button" 
				aria-controls="<?php echo esc_attr( $acc_id ); ?>-content" 
				class="accordion-button"
				data-wp-bind--aria-expanded="state.isExpanded"
				data-wp-on--click="actions.toggleAccordion"
				data-wp-on--keydown="actions.keyboardSupport"
			>
				<span><?php echo wp_kses_post( $acc_title ); ?></span>
				<span class="accordion-icon" data-wp-text="state.currentButton"></span>
			</button>
		</h3>
		<div 
			role="region"
			aria-labelledby="<?php echo esc_attr( $acc_id ); ?>-button"
			id="<?php echo esc_attr( $acc_id ); ?>-content" 
			class="accordion-content"
			data-wp-bind--hidden="!state.isExpanded"
		>
			<p><?php echo wp_kses_post( $acc_content ); ?></p>
		</div>
	</div>
</div>