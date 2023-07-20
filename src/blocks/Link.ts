import { Block } from 'payload/types';

const Link: Block = {
	slug: 'link',
    interfaceName: 'link',
	fields: [
		{
			name: 'label',
			label: 'Text to display',
			type: 'text',
		},
		{
			type: 'radio',
			name: 'linkType',
			required: true,
			options: [
				{
					label: 'Custom URL',
					value: 'link'
				},
				{
					label: 'Internal Link',
					value: 'page'
				}
			],
			defaultValue: 'link',
			admin: {
				description: 'Choose between entering a custom text URL or linking to another document.'
			}
		},
		{
			name: 'link',
			label: 'Enter a URL',
			type: 'text',
			required: true,
			admin: {
				condition: (_data, siblingData) => siblingData.linkType === 'link' ? true : false,
			}
		},
		{
			name: 'page',
			type: 'relationship',
			relationTo: 'pages',
			required: true,
			admin: {
				condition: (_data, siblingData) => siblingData.linkType === 'page' ? true : false,
			}
		},
		{
			name: 'openInNewTab',
			label: 'Open in new tab',
			type: 'checkbox',
		},
	]
};

export default Link;
