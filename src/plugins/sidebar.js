import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('blocks-course-plugin', {
	render: () => {
		return (
			<PluginSidebar
				name="meta-fields-sidebar"
				icon="admin-settings"
				title={__('Post Options', 'blocks-course')}
			>
				hbiuhiihou
			</PluginSidebar>
		);
	},
});
