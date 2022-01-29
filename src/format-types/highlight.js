import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const HighlightFormatButton = ({ isActive, value, onChange }) => {
	return (
		<RichTextToolbarButton
			icon="edit"
			title={__('Highlight', 'blocks-course')}
			onClick={() => {
				onChange(
					toggleFormat(value, {
						type: 'block-course/highlight',
						attributes: {
							style: 'background-color: #f0ff00',
						},
					})
				);
			}}
			isActive={isActive}
		/>
	);
};

registerFormatType('block-course/highlight', {
	title: __('Highlight', 'blocks-course'),
	tagName: 'span',
	className: null,
	edit: HighlightFormatButton,
});
