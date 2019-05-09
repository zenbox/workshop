<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'workshop');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'm=fu0{/=cId#|c@P`ZY(iMY!9&^~6$y&q~czE8l2Knu@e!/k,T31^44-j~Q-gY %');
define('SECURE_AUTH_KEY', 'u )Lq*>~w2bpsf?ZK9c.2?Q?$iNoe}~SMC0VHSvrZXBn-v}0[`&1YBw(Boq=/2TO');
define('LOGGED_IN_KEY', 'V*YL5CjxNeC<LU{y-A2|ALTDcW=cV^Lwx+C++)@$3=e3aKMnh4W-?9UEp$PD@en.');
define('NONCE_KEY', '[C!-DG2twrCwluk%_vm}/h{}SErz`WR1w,<i%e[_W[{!7sOP??*}NmsJ=+ItIo^v');
define('AUTH_SALT', '3lz=.Kq9!jm3/T=@)2uXm}c?r6#Wu`d>-UB,kBG*#-IBr?gg OCQYnLcnbky.RTs');
define('SECURE_AUTH_SALT', 'k/[Pcjg0%)+jrv+&IG[%Y.bHuvAs,L{~5r}d5(P<$r{xG =Ex7Zl7Pai]h(L[N_.');
define('LOGGED_IN_SALT', 'BipwHST}x+M3Tb7gmOb|TxnxxCu[XW!s$iS9 j:D.|+M&UkUHtt%*X[,wO%Kcm0s');
define('NONCE_SALT', '?%bjSrMPSj8I)@o!v1[/$ Yd?E)0IWgi`-MH&89N%hL)QbGavr`YlHTzAD^:RNr6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
