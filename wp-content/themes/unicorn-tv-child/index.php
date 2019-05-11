<?php get_header() ?>

<div class="content">

  <h1>A Child Theme</h1>
    <main>
      <?php  if (have_posts()) : while (have_posts()) :  the_post(); ?>
      <?php get_template_part('template-parts/content');?>
    <?php endwhile; endif; ?>
    </main>

<?php get_sidebar();?>
</div>

<?php get_footer(); ?>
