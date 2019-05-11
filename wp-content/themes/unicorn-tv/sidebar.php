
<aside>
  <?php
 //if (!function_exists(dynamic_sidebar) || !dynamic_sidebar(1)) :



$argsArchive = array(
  'type' => 'daily'
);
$argsCategories = array(
  'title_li' => ''
);
$argsCalendar = array(

);
?>

  <nav>
    <h4><?php echo __('Primary Menu'); ?></h4>
  <ul>
  <?php wp_get_archives($argsArchive); ?>
  </ul>
</nav>

<nav>
  <h4>Categories</h4>
<ul>
<?php wp_list_categories($argsCategories); ?>
</ul>
</nav>

<nav id="my-calendar">
<ul>
<?php get_calendar($argsCalendar); ?>
</ul>
</nav>


<?php //endif?>

<?php if (!function_exists(dynamic_sidebar) || !dynamic_sidebar(2)) : endif; ?>

</aside>
