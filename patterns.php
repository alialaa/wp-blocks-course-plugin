<?php
function blocks_course_plugin_register_pattern_cat() {
    register_block_pattern_category( 'blocks-course', array(
        'label' => __('Blocks Course', 'blocks-course')
    ));
}

add_action( 'init', 'blocks_course_plugin_register_pattern_cat' );

function blocks_course_plugin_register_pattern() {
    register_block_pattern( 'blocks-course/my-patterns', array(
        'title' => __('My Pattern', 'blocks-course'),
        'description' => __('Some description', 'blocks-course'),
        'categories' => array('blocks-course'),
        'keywords' => array('my pattern'),
        'content' => '<!-- wp:columns --><div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} --><div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:heading --><h2 id="our-team">Our Team</h2><!-- /wp:heading --><!-- wp:paragraph --><p>wrefregregreg</p><!-- /wp:paragraph --></div><!-- /wp:column --><!-- wp:column {"width":"66.66%"} --><div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:blocks-course/team-members --><div class="wp-block-blocks-course-team-members has-2-columns"><!-- wp:blocks-course/team-member --><div class="wp-block-blocks-course-team-member"></div><!-- /wp:blocks-course/team-member --><!-- wp:blocks-course/team-member --><div class="wp-block-blocks-course-team-member"></div><!-- /wp:blocks-course/team-member --><!-- wp:blocks-course/team-member --><div class="wp-block-blocks-course-team-member"></div><!-- /wp:blocks-course/team-member --></div><!-- /wp:blocks-course/team-members --></div><!-- /wp:column --></div><!-- /wp:columns -->'
    ));
}
add_action( 'init', 'blocks_course_plugin_register_pattern' );
