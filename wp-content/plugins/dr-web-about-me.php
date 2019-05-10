<?php
/*
Plugin Name: Dr. Web About Widget
Plugin URI: http://www.drweb.de/magazin/
Description: Zeigt eine kleine "Über mich" Box mit dem Autor-Gravatar in der Sidebar an
Author: Andreas Hecht
Author URI: http://andreas-hecht.com
Version: 0.1
*/
// Register DrWeb_About_Widget widget
function register_drweb_about_widget()
{
    register_widget('DrWeb_About_Widget');
}
add_action('widgets_init', 'register_drweb_about_widget');
class DrWeb_About_Widget extends WP_Widget
{
    /**
        * Holds widget settings defaults, populated in constructor.
        *
        * @var array
        */
    protected $defaults;
    /**
     * Register widget with WordPress.
     */
    public function __construct()
    {
        $this->defaults = array(
            'title'          => '',
            'alignment'	     => 'left',
            'user'           => '',
            'size'           => '45',
            'author_info'    => '',
            'page'           => '',
            'page_link_text' => __('Weiter lesen', 'evolution') . ' &raquo;',
        );
        $widget_ops = array(
            'classname'   => 'user-profile',
            'description' => __('Zeigt eine kleine "Über mich" Box mit dem Autor-Gravatar in der Sidebar an.', 'evolution'),
        );
        $control_ops = array(
            'id_base' => 'user-profile',
            'width'   => 200,
            'height'  => 250,
        );
        $this->WP_Widget('user-profile', __('Dr. Web Über mich', 'evolution'), $widget_ops, $control_ops);
    }
    /**
         * Front-end display of widget.
         *
         * @see WP_Widget::widget()
         *
         * @param array $args     Widget arguments.
         * @param array $instance Saved values from database.
         */
    public function widget($args, $instance)
    {
        extract($args);
        /** Merge with defaults */
        $instance = wp_parse_args((array) $instance, $this->defaults);
        echo $before_widget;
        if (! empty($instance['title'])) {
            echo $before_title . apply_filters('widget_title', $instance['title'], $instance, $this->id_base) . $after_title;
        }
        $text = '';
        if (! empty($instance['alignment'])) {
            $text .= '<span class="align' . esc_attr($instance['alignment']) . '">';
        }
        $text .= get_avatar($instance['user'], $instance['size']);
        if (! empty($instance['alignment'])) {
            $text .= '</span>';
        }
        $text .= get_the_author_meta('description', $instance['user']);
        $text .= $instance['page'] ? sprintf(' <a class="pagelink" href="%s">%s</a>', get_page_link($instance['page']), $instance['page_link_text']) : '';
        echo wpautop($text);
        echo $after_widget;
    }
    public function form($instance)
    {
        /** Merge with defaults */
        $instance = wp_parse_args((array) $instance, $this->defaults); ?>
		<p>
			<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Titel', 'evolution'); ?>:</label>
			<input type="text" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" value="<?php echo esc_attr($instance['title']); ?>" class="widefat" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_name('user'); ?>"><?php _e('Wähle einen User aus. Die E-Mail Adresse dieses Accounts wird genutzt, um das Gravatar Bild anzuzeigen. Wenn Du keinen Gravatar hast, besorge Dir einen unter: <a href="https://de.gravatar.com/">Gravatar.com</a>. ', 'evolution'); ?></label><br /><br />
			<?php wp_dropdown_users(array( 'who' => 'authors', 'name' => $this->get_field_name('user'), 'selected' => $instance['user'] )); ?>
		</p>
		<p>
			<label for="<?php echo $this->get_field_id('size'); ?>"><?php _e('Gravatar Größe', 'evolution'); ?>:</label>
			<select id="<?php echo $this->get_field_id('size'); ?>" name="<?php echo $this->get_field_name('size'); ?>">
				<?php
                $sizes = array( __('Klein', 'evolution') => 45, __('Mittel', 'evolution') => 65, __('Groß', 'evolution') => 85, __('Sehr Groß', 'evolution') => 125 );
        $sizes = apply_filters('evolution_gravatar_sizes', $sizes);
        foreach ((array) $sizes as $label => $size) {
            ?>
					<option value="<?php echo absint($size); ?>" <?php selected($size, $instance['size']); ?>><?php printf('%s (%spx)', $label, $size); ?></option>
				<?php
        } ?>
			</select>
		</p>
		<p>
			<label for="<?php echo $this->get_field_id('alignment'); ?>"><?php _e('Gravatar Ausrichtung', 'evolution'); ?>:</label>
			<select id="<?php echo $this->get_field_id('alignment'); ?>" name="<?php echo $this->get_field_name('alignment'); ?>">
				<option value="">- <?php _e('Keine', 'evolution'); ?> -</option>
				<option value="left" <?php selected('left', $instance['alignment']); ?>><?php _e('Links', 'evolution'); ?></option>
				<option value="right" <?php selected('right', $instance['alignment']); ?>><?php _e('Rechts', 'evolution'); ?></option>
			</select>
		</p>
		<h4>Widget Text</h4>
		<fieldset>
			<legend><?php _e('Den Text über Dich, der in diesem Widget angezeigt wird, sind die biographischen Angaben in Deinem Userprofil. Bitte fülle daher Dein Userprofil aus. (Benutzer => Dein Profil).', 'evolution'); ?></legend>
			<p>
				<label for="<?php echo $this->get_field_id('author_info'); ?>_val1"><?php _e('Author Bio', 'evolution'); ?></label>
			</p>
		</fieldset>
		<h4>Link zur "Über mich" Seite</h4>
		<p>
			<label for="<?php echo $this->get_field_name('page'); ?>"><?php _e('Wähle Deine "Über mich" Seite aus der Liste unten aus. Diese Seite wird durch das "Über mich" Widget verlinkt. <br />', 'evolution'); ?></label><br />
			<?php wp_dropdown_pages(array( 'name' => $this->get_field_name('page'), 'show_option_none' => __('Keine', 'evolution'), 'selected' => $instance['page'] )); ?>
		</p>
		<p>
			<label for="<?php echo $this->get_field_id('page_link_text'); ?>"><?php _e('Der Text für den Link am Ende des "Über mich" Widgets.', 'evolution'); ?><br /><br /></label>
			<input type="text" id="<?php echo $this->get_field_id('page_link_text'); ?>" name="<?php echo $this->get_field_name('page_link_text'); ?>" value="<?php echo esc_attr($instance['page_link_text']); ?>" class="widefat" />
		</p>
<?php
    }
    /**
        * Sanitize widget form values as they are saved.
        *
        * @see WP_Widget::update()
        *
        * @param array $new_instance Values just sent to be saved.
        * @param array $old_instance Previously saved values from database.
        *
        * @return array Updated safe values to be saved.
        */
    public function update($new_instance, $old_instance)
    {
        $new_instance['title']          = strip_tags($new_instance['title']);
        $new_instance['bio_text']       = current_user_can('unfiltered_html') ? $new_instance['bio_text'] : evolution_formatting_kses($new_instance['bio_text']);
        $new_instance['page_link_text'] = strip_tags($new_instance['page_link_text']);
        return $new_instance;
    }
}
