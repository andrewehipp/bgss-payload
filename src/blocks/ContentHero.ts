import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentHero: Block = {
	slug: 'contentHero',
    interfaceName: 'contentHero',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			type: 'richText',
			name: 'body',
		},
		{
			name: "buttons",
			type: "array",
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
	],
};

export default ContentHero;
