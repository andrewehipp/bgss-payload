import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentServiceItem: Block = {
	slug: 'contentServiceItem',
    interfaceName: 'contentServiceItem',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-service-item.png',
	fields: [
		anchorField(),
		{
			type: 'text',
			name: 'smallTitle',
		},
		{
			type: 'text',
			name: 'title',
		},
		{
			type: 'richText',
			name: 'body',
		},
		{
			type: 'array',
			name: 'items',
			admin: {
				components: {
					RowLabel: ({ data }) => data?.title
				}	
			},
			fields: [
				{
					type: 'text',
					name: 'title',
				},
				{
					type: 'text',
					name: 'copy',
				},
				
			]
		},
		{
			name: "button",
			type: "array",
			maxRows: 1,
			fields: button()?.fields
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: Media.slug,
			filterOptions: {
				mimeType: { contains: 'image' },
			},
		},
		{
			type: 'checkbox',
			name: 'flipLayout'
		}
	],
};

export default ContentServiceItem;
