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
$unique_id = wp_unique_id( 'p-' );

// Adds the global state.
wp_interactivity_state(
	'gems',
	array()
);

$context = array();
?>

<div 
	<?php echo get_block_wrapper_attributes(); ?> 
	data-wp-interactive="gems"
	<?php echo wp_interactivity_data_wp_context( $context ); ?>
>
	<div class="accordion-item">
		<button class="accordion-header">
			<span><?php echo wp_kses_post( $title ); ?></span>
			<span class="accordion-button">+</span>
		</button>
		<div id="accordion-content-0" class="accordion-content">
			<p><?php echo wp_kses_post( $content ); ?></p>
		</div>
	</div>
</div>