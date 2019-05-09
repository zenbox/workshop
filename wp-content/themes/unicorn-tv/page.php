<?php get_header() ?>

<div class="content">
    <main>
      <?php  if (have_posts()) : while (have_posts()) :  the_post(); ?>
        <?php get_template_part('template-parts/content');?>
      <?php endwhile; endif; ?>
    </main>


</div>

<?php get_footer(); ?>
