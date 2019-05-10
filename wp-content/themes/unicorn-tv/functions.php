<?php
/**
 * [wpdocs_unicorn_scripts]
 * @author Michael
 * @since 2019/05/10
 * @version 1.0.0
 */

 // - - - - - - - - - -
 // STYLES AND SCRIPTS
 // - - - - - - - - - -
function wpdocs_unicorn_scripts()
{
    wp_enqueue_style('style-name', get_template_directory_uri()   . '/assets/css/styles.css');
    wp_enqueue_script('script-name', get_template_directory_uri() . '/assets/js/example.js', array(), false);  // false -> at the bottom
}

add_action('wp_enqueue_scripts', 'wpdocs_unicorn_scripts');

// - - - - - - - - - -
// SIDEBARS
// - - - - - - - - - -
/**
 * Registering a sidebar
 * @var [type]
 */
if (function_exists(register_sidebar)) {
    register_sidebar(array(
      'name' => __('Main Sidebar', 'theme-slug'),
      'id' => 'sidebar-1',
      'description' => __('Widgets in this area will be shown on all posts and pages.', 'theme-slug'),
      'before_widget' =>  '<nav>',
      'after_widget'  => '</nav>',
      'before_title'  => '<h2 class="widgettitle">',
      'after_title'   => '</h2>',
  ));

    register_sidebar(array(
      'name' => __('Another Sidebar', 'theme-slug'),
      'id' => 'sidebar-2',
      'description' => __('Widgets in this area will be shown on all posts and pages.', 'theme-slug'),
      'before_widget' =>  '<nav>',
      'after_widget'  => '</nav>',
      'before_title'  => '<h2 class="widgettitle">',
      'after_title'   => '</h2>',
    ));
}



// - - - - - - - - - -
// WIDGETS
// - - - - - - - - - -
/**
 * Adding an own widget
 * @var [type]
 */
 add_action('widgets_init', function () {
     register_widget('My_Widget');
 });

 /**
  * [My_Widget description]
  * @author Michael
  * @since 2019/05/10
  */
class My_Widget extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct()
    {
        $widget_ops = array(
            'classname' => 'my_widget',
            'description' => 'My Widget is awesome',
        );
        parent::__construct('my_widget', 'My Widget', $widget_ops);
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance)
    {
        // outputs the content of the widget
        echo '<p class="my-widget">hello world</p>';
    }

    /**
     * Outputs the options form on admin
     *
     * @param array $instance The widget options
     */
    public function form($instance)
    {
        // outputs the options form on admin
    }

    /**
     * Processing widget options on save
     *
     * @param array $new_instance The new options
     * @param array $old_instance The previous options
     *
     * @return array
     */
    public function update($new_instance, $old_instance)
    {
        // processes widget options to be saved
    }
}
