<?php
// This file is generated. Do not modify it manually.
return array(
	'create-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'default/create-block',
		'version' => '0.1.0',
		'title' => 'Default create-block',
		'category' => 'widgets',
		'icon' => 'media-interactive',
		'description' => 'An interactive block with the Interactivity API.',
		'example' => array(
			
		),
		'supports' => array(
			'interactivity' => true
		),
		'textdomain' => 'create-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	)
);
