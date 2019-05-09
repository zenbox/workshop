
<article class="tv-own-class">
  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
  <?php the_content(); ?>
  <address>
    <p><?php the_author(); ?>
      <time datetime="<?php the_date(); ?> <?php the_time(); ?>"><?php the_date(); ?> <?php the_time(); ?></time></p>
  </address>

  <h4><?php get_post_format();?></h4>
  <h4><?php echo get_post_format();?></h4>

  <?php get_template_part('template-parts/sub', get_post_type()); ?>

</article>
