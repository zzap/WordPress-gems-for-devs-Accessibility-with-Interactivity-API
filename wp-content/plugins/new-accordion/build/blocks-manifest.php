<?php
// This file is generated. Do not modify it manually.
return array(
	'new-accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'gems/new-accordion',
		'version' => '0.1.0',
		'title' => 'New accordion',
		'category' => 'widgets',
		'icon' => 'carrot',
		'description' => 'An interactive block with the Interactivity API.',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Accordion title'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Accordion content'
			)
		),
		'supports' => array(
			'interactivity' => true
		),
		'textdomain' => 'new-accordion',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	)
);
