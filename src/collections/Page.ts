import { CollectionConfig } from 'payload/types';

import ContentHero from '../blocks/ContentHero';

const Pages: CollectionConfig = {
	slug: 'pages',
	fields: [
		{
			name: 'slug',
			type: 'text',
			unique: true,
		},
		{
			name: 'content',
			type: 'blocks',
			blocks: [
				ContentHero,
			]
		},
	],
};

export default Pages;
