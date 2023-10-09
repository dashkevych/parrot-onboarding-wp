<?php
/**
 * Build our admin dashboard.
 *
 * @package parrot-onboarding
 */

namespace PO;

/**
 * Exit if the file is accessed directly.
 *
 * This is a security feature to make sure that
 * the file cannot be accessed unless it is included or required by another file,
 * ensuring that it is always executed in the proper context.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * This class adds HTML attributes to various theme elements.
 */
class Dashboard {
	/**
	 * Class instance.
	 *
	 * @var $instance Class instance.
	 */
	private static $instance;

	/**
	 * Menu slug.
	 *
	 * @var $menu_slug string
	 */
	private static $menu_slug = 'po-dashboard';

	/**
	 * Initiator.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Get started.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_menu_item' ) );
		add_filter( 'admin_body_class', array( $this, 'set_admin_body_class' ) );
		add_action( 'in_admin_header', array( $this, 'add_header' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'po_admin_dashboard', array( $this, 'dashboard_app' ) );
	}

	/**
	 * Adds dashboard menu item.
	 */
	public function add_menu_item() {
		add_theme_page(
			esc_html__( 'ProWP', 'prowp' ),
			esc_html__( 'ProWP', 'prowp' ),
			'edit_theme_options',
			self::$menu_slug,
			array( $this, 'page' )
		);
	}

	/**
	 * Returns available dashboard pages.
	 */
	public static function get_pages() {
		$screen_slug = 'appearance_page_' . self::$menu_slug;

		return apply_filters(
			'po_dashboard_screens',
			array( $screen_slug )
		);
	}

	/**
	 * Adds a body class on dashboard pages.
	 *
	 * @param string $classes The existing classes.
	 */
	public function set_admin_body_class( $classes ) {
		$dashboard_pages = self::get_pages();
		$current_screen  = get_current_screen();

		if ( in_array( $current_screen->id, $dashboard_pages, true ) ) {
			$classes .= ' po-dashboard-page';
		}

		return $classes;
	}

	/**
	 * Ouputs dashboard header.
	 */
	public static function header() {
		?>
		<div class="po-dashboard-header">
			<div class="po-dashboard-header__title">
				<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
			</div>

			<?php self::navigation(); ?>
		</div>
		<?php
	}

	/**
	 * Outputs dashboard navigation.
	 */
	public static function navigation() {
		$screen_slug         = 'appearance_page_' . self::$menu_slug;
		$dashboard_admin_url = 'themes.php?page=' . self::$menu_slug;
		$screen              = get_current_screen();
		$tabs                = apply_filters(
			'po_dashboard_tabs',
			array(
				'dashboard' => array(
					'name'  => esc_html__( 'Dashboard', 'po' ),
					'url'   => admin_url( $dashboard_admin_url ),
					'class' => $screen_slug === $screen->id ? 'active' : '',
				),
				'support'      => array(
					'name'     => esc_html__( 'Support', 'po' ),
					'url'      => '#',
					'class'    => '',
					'external' => true,
				),
			)
		);
		?>

		<div class="po-dashboard-header__navigation">
			<?php
			foreach ( $tabs as $tab ) {
				if ( isset( $tab['class'] ) && '' !== $tab['class'] ) {
					printf(
						'<a href="%1$s" class="%2$s" %4$s>%3$s</a>',
						esc_url( $tab['url'] ),
						esc_attr( $tab['class'] ),
						esc_html( $tab['name'] ),
						! empty( $tab['external'] ) ? 'target="_blank" rel="noreferrer noopener"' : ''
					);
				} else {
					printf(
						'<a href="%1$s" %2$s>%3$s</a>',
						esc_url( $tab['url'] ),
						! empty( $tab['external'] ) ? 'target="_blank" rel="noreferrer noopener"' : '',
						esc_html( $tab['name'] ),
					);
				}
			}
			?>
		</div>
		<?php
	}

	/**
	 * Adds dashboard header.
	 */
	public function add_header() {
		$dashboard_pages = self::get_pages();
		$current_screen  = get_current_screen();

		if ( in_array( $current_screen->id, $dashboard_pages, true ) ) {
			self::header();
		}
	}

	/**
	 * Adds scripts to the page.
	 */
	public function enqueue_scripts() {
		$dashboard_pages = self::get_pages();
		$current_screen  = get_current_screen();

		// Load scripts only when it is needed.
		if ( ! in_array( $current_screen->id, $dashboard_pages, true ) ) {
			return;
		}

		// Scripts dependency files.
		$asset_file = PO_DASHBOARD_PATH . '/build/index.asset.php';
		// Fallback dependency array.
		$dependency = array();
		$version    = PO_DASHBOARD_VERSION;

		// Set dependency and version.
		if ( file_exists( $asset_file ) ) {
			$asset_file = include $asset_file;         // phpcs:ignore
			$dependency = $asset_file['dependencies']; // phpcs:ignore
			$version    = $asset_file['version'];
		}

		wp_register_script(
			'po-admin-dashboard',
			PO_DASHBOARD_URL . '/build/index.js',
			$dependency,
			$version,
			true
		);

		wp_enqueue_script( 'po-admin-dashboard' );

		wp_localize_script(
			'po-admin-dashboard',
			'prowpData',
			array(
				'adminUrl' => admin_url(),
			)
		);

		// Enqueue styles.
		wp_enqueue_style(
			'po-admin-dashboard',
			PO_DASHBOARD_URL . '/build/style-index.css',
			array( 'wp-components' ),
			$version
		);
	}

	/**
	 * Outputs HTML for dashboard page.
	 */
	public function page() {
		?>
		<div class="wrap">
			<div class="po-dashboard">
				<?php do_action( 'po_admin_dashboard' ); ?>
			</div>
		</div>
		<?php
	}

	/**
	 * Ouput container for dashboard app.
	 */
	public function dashboard_app() {
		echo '<div id="po-dashboard-app"></div>';
	}
}
