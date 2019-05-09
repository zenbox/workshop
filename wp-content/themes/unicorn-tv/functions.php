<?php
/**
 * adding styles and scripts
 */

function wpdocs_unicorn_scripts()
{
    wp_enqueue_style('style-name', get_template_directory_uri()   . '/assets/css/styles.css');
    wp_enqueue_script('script-name', get_template_directory_uri() . '/assets/js/example.js', array(), false);  // false -> at the bottom
}

add_action('wp_enqueue_scripts', 'wpdocs_unicorn_scripts');
