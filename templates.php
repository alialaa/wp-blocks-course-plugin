<?php

function blocks_course_plugin_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object->template_lock = 'insert';
    $post_type_object->template = array(
        array('blocks-course/metadata-block'),
        array('core/paragraph', array('content' => 'Some text')),
        array(
            'blocks-course/team-members', 
            array('columns' => 3), 
            array(
                array(
                    'blocks-course/team-member',
                    array(
                        'name' => 'John Doe',
                        'bio' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque nibh, tincidunt ut facilisis vitae, ullamcorper sit amet lectus. Proin porta vulputate purus.',
                        'url' => 'https://picsum.photos/id/1012/300/200'
                    )
                ),
                array(
                    'blocks-course/team-member',
                    array(
                        'name' => 'John Doe',
                        'bio' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque nibh, tincidunt ut facilisis vitae, ullamcorper sit amet lectus. Proin porta vulputate purus.',
                        'url' => 'https://picsum.photos/id/1012/300/200'
                    )
                ),
                array(
                    'blocks-course/team-member',
                    array(
                        'name' => 'John Doe',
                        'bio' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque nibh, tincidunt ut facilisis vitae, ullamcorper sit amet lectus. Proin porta vulputate purus.',
                        'url' => 'https://picsum.photos/id/1012/300/200'
                    )
                )
            )
        )
    );
}
add_action( 'init', 'blocks_course_plugin_register_template' );