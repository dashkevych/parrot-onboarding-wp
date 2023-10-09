<?php
/**
 * This file sets up the dashboard functionality for the theme.
 *
 * @package parrot-onboarding
 * @author  Taras Dashkevych
 * @license GNU General Public License v2 or later
 * @link    https://themesharbor.com/
 */

/**
 * This line imports the Dashboard class from the PO (Parrot Onboarding) namespace into the current file.
 * By doing this, we can directly use the class name 'Dashboard' instead of the fully qualified name '\PO\Dashboard'
 * throughout the rest of this file. It helps in making the code cleaner and more readable.
 * Anytime we refer to 'Dashboard' in this file, PHP will understand that we mean the Dashboard class located
 * within the PO namespace.
 */
use PO\Dashboard;

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
 * Define the constant PO_DASHBOARD_PATH with the absolute path to the dashboard's includes directory.
 * `untrailingslashit()` is used to remove any trailing slashes to ensure a clean path string.
 * `get_template_directory()` retrieves the absolute path to the directory of the current theme.
 */
define( 'PO_DASHBOARD_PATH', untrailingslashit( get_template_directory() ) . '/includes/dashboard' );
/**
 * Define the constant PO_DASHBOARD_URL that stores the URL of the dashboard's includes directory.
 * `untrailingslashit()` is used to remove any trailing slashes to ensure a clean URL string.
 * `get_template_directory_uri()` retrieves the URL of the current theme's directory.
 */
define( 'PO_DASHBOARD_URL', untrailingslashit( get_template_directory_uri() . '/includes/dashboard' ) );
/**
 * Define a constant 'PO_DASHBOARD_VERSION' to hold the current version of the ProWP Dashboard.
 */
define( 'PO_DASHBOARD_VERSION', '1.0.0' );

/**
 * Include the Dashboard class file.
 *
 * Require the Dashboard class file. This file contains the definition of the Dashboard class,
 * which is used to set up and manage the theme's dashboard functionality.
 */
require_once( PO_DASHBOARD_PATH . '/classes/class-po-dashboard.php' );

/**
 * Instantiate the Dashboard class.
 *
 * Call the get_instance() method of the Dashboard class. This method is used to retrieve
 * the singleton instance of the class, ensuring that only one instance of the class is created.
 * If the instance does not exist yet, it is created.
 */
Dashboard::get_instance();
