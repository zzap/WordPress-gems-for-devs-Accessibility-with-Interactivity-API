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

$title   = $attributes['title'] ?? __( 'Accordion title', 'new-accordion' );
$content = $attributes['content'] ?? __( 'Accordion content', 'new-accordion' );
// Generates a unique id for aria-controls.
$accordion_id = wp_unique_id( 'accordion' );

// Adds the global state.
wp_interactivity_state(
	'gems',
	array(
		'currentButton'         => "+",
		'accordionButtonOpened' => "-",
		'accordionButtonClosed' => "+",
	)
);

$context = array(
	'isCurrentOpen' => false,
);
?>

<div 
	<?php echo get_block_wrapper_attributes(); ?> 
	data-wp-interactive="gems"
	<?php echo wp_interactivity_data_wp_context( $context ); ?>
>
	<div class="accordion-item">
		<h3>
			<button 
				id="<?php echo esc_attr( $accordion_id ); ?>-button"
				class="accordion-button"
				arria-controls="<?php echo esc_attr( $accordion_id ); ?>-content"
				data-wp-on--click="actions.toggleAccordion"
				data-wp-bind--aria-expanded="context.isCurrentOpen"
			>
				<span>
					<?php echo wp_kses_post( $title ); ?>
					<span aria-hidden="true" data-wp-text="state.currentButton"></span>			
				</span>
			</button>
		</h3>
		<div 
			id="<?php echo esc_attr( $accordion_id ); ?>-content" 
			class="accordion-content"
			aria-labelledby="<?php echo esc_attr( $accordion_id ); ?>-button"
			data-wp-bind--hidden="!context.isCurrentOpen"
		>
			<p><?php echo wp_kses_post( $content ); ?></p>
		</div>
	</div>
</div>