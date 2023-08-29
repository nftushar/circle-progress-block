<?php
class BDBBlockDirectory{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
	}

	function enqueueBlockAssets(){
		wp_register_script( 'circleProgress', B_BLOCKS_DIR_URL . 'assets/js/circle-progress.js', [ 'jquery' ], '1.2.2', true );
	}

	function onInit() {
		wp_register_style( 'b-blocks-circle-progress-style', B_BLOCKS_DIR_URL . 'dist/style.css', [], B_BLOCKS_VERSION ); // Style
		wp_register_style( 'b-blocks-circle-progress-editor-style', B_BLOCKS_DIR_URL . 'dist/editor.css', [ 'b-blocks-circle-progress-style' ], B_BLOCKS_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'b-blocks-circle-progress-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'b-blocks-circle-progress-editor-script', 'circle-progress', B_BLOCKS_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

        wp_enqueue_style('b-blocks-circle-progress-style');
        wp_enqueue_script( 'b-blocks-circle-progress-script', B_BLOCKS_DIR_URL . 'dist/script.js', [ 'react', 'react-dom', 'circleProgress' ], B_BLOCKS_VERSION, true );
		wp_set_script_translations( 'b-blocks-circle-progress-script', 'circle-progress', B_BLOCKS_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-b-blocks-circle-progress $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bBlocksCircleProgress-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BDBBlockDirectory();