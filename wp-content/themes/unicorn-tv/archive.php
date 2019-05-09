<?php get_header() ?>

<div class="content">
    <main>

<h1>Archive</h1>

      <?php  if (have_posts()) : while (have_posts()) :  the_post(); ?>
      <article>
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <?php the_content(); ?>
        <address>
          <p><?php the_author(); ?>
            <time datetime="<?php the_date(); ?> <?php the_time(); ?>"><?php the_date(); ?> <?php the_time(); ?></time></p>
        </address>
      </article>
    <?php endwhile; endif; ?>

    </main>


</div>

<?php get_footer(); ?>
