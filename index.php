<?php
/**
 * Plugin Name: Circle Progress
 * Description: circleProgress Gutenberg plugin: Streamline Gutenberg editing with easy-to-use, responsive circleProgress  and more..
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: circle-progress
 */
// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }
 
// Constant
define( 'B_BLOCKS_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );

require_once plugin_dir_path( __FILE__ ) . 'inc/block.php';