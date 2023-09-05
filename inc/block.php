<?php
class BBlocksCircleProgress{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
	}

	function enqueueBlockAssets(){
		wp_register_script( 'circleProgress', plugin_dir_url( __DIR__ ) . 'assets/js/circle-progress.js', [ 'jquery' ], '1.2.2', true );
	}

	function onInit() {
		wp_register_style( 'b-blocks-circle-progress-style', plugin_dir_url( __DIR__ ) . 'dist/style.css', [], B_BLOCKS_VERSION ); // Style
		wp_register_style( 'b-blocks-circle-progress-editor-style', plugin_dir_url( __DIR__ ) . 'dist/editor.css', [ 'b-blocks-circle-progress-style' ], B_BLOCKS_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'b-blocks-circle-progress-editor-stylthicknesse',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'b-blocks-circle-progress-editor-script', 'circle-progress', plugin_dir_path( __DIR__ ) . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

        wp_enqueue_style('b-blocks-circle-progress-style');
        wp_enqueue_script( 'b-blocks-circle-progress-script', plugin_dir_url( __DIR__ ) . 'dist/script.js', [ 'react', 'react-dom', 'circleProgress' ], B_BLOCKS_VERSION, true );
		wp_set_script_translations( 'b-blocks-circle-progress-script', 'circle-progress', plugin_dir_path( __DIR__ ) . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-b-blocks-circle-progress $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bBlocksCircleProgress-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BBlocksCircleProgress();