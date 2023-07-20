import { Block } from 'payload/types';

import Media from '../collections/Media';
import Button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentCards: Block = {
	slug: 'contentCards',
    interfaceName: 'contentCards',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			name: 'preheading',
			type: 'text'
		},
		{
			name: 'heading',
			type: 'text'
		},
		{
			name: 'copy',
			type: 'text'
		},
		{
			name: "buttons",
			type: "array",
			fields: Button()?.fields
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: Media.slug,
			filterOptions: {
				mimeType: { contains: 'image' },
			},
		},
	],
};

export default ContentCards;
