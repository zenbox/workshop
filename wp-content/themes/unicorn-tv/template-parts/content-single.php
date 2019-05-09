

      <article>

        <address>
          <p><?php the_author(); ?>
            <time datetime="<?php the_date(); ?> <?php the_time(); ?>"><?php the_date(); ?> <?php the_time(); ?></time></p>
        </address>


        <h2><?php the_title(); ?></h2>
        <?php the_content(); ?>
        <p><?php get_post_format() ?></p>


        <nav>
          <ul>
          <?php if (next_post_link()) : ?>
            <li><?php next_post_link(); ?></li>
          <?php endif ?>
          <?php if (previous_post_link()) : ?>
            <li><?php previous_post_link(); ?></li>
          <?php endif ?>
          </ul>
        </nav>
      </article>
