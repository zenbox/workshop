<?php
$argsArchive = array(
  'type' => 'daily'
);
$argsCategories = array(
  'title_li' => ''
);
$argsCalendar = array(

);
?>
<aside>
  <nav>
    <h4>Archive</h4>
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

</aside>
