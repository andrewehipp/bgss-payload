import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentCards: Block = {
	slug: 'contentCards',
	labels: {
		singular: 'Content Cards',
		plural: 'Content Cards'
	},
    interfaceName: 'contentCards',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-cards.png',
	fields: [
		anchorField(),
		{
			name: "cards",
			type: "array",
			fields: [
				{
					name: 'thumbnail',
					type: 'upload',
					relationTo: Media.slug,
					filterOptions: {
						mimeType: { contains: 'image' },
					},
				},
				{
					name: 'title',
					type: 'text',
				},
				{
					name: 'copy',
					type: 'textarea',
				},
				{
					name: "button",
					type: "array",
					maxRows: 1,
					fields: button()?.fields
				},
			]
		},
	],
};

export default ContentCards;
