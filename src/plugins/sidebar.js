import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	PluginDocumentSettingPanel,
	PluginPostStatusInfo,
	PluginPrePublishPanel,
	PluginPostPublishPanel,
	PluginMoreMenuItem,
	PluginBlockSettingsMenuItem,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('blocks-course-plugin', {
	render: () => {
		return (
			<>
				<PluginDocumentSettingPanel
					title="My Panel"
					icon="admin-collapse"
				>
					<p>Document Setting Panel</p>
				</PluginDocumentSettingPanel>
				<PluginPostStatusInfo>
					<p>Status info content</p>
				</PluginPostStatusInfo>
				<PluginPrePublishPanel title="Pre publish title">
					Pre publish content
				</PluginPrePublishPanel>
				<PluginPostPublishPanel title="Post publish title">
					Post publish content
				</PluginPostPublishPanel>
				<PluginMoreMenuItem
					icon="admin-customizer"
					onClick={() => alert(true)}
				>
					Plugin Item
				</PluginMoreMenuItem>
				<PluginBlockSettingsMenuItem
					allowedBlocks={['core/paragraph']}
					icon="admin-home"
					label="New Item"
					onClick={() => alert(true)}
				/>
				<PluginSidebar
					name="meta-fields-sidebar"
					icon="admin-settings"
					title={__('Post Options', 'blocks-course')}
				>
					hbiuhiihou
				</PluginSidebar>
			</>
		);
	},
});
