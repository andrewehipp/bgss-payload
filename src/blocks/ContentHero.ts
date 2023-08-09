import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentHero: Block = {
	slug: 'contentHero',
    interfaceName: 'contentHero',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-hero.png',
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
