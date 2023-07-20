import { CollectionConfig } from 'payload/types';

import ContentHero from '../blocks/ContentHero';
import ContentCards from '../blocks/ContentCards';

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
				ContentCards,
			]
		},
	],
};

export default Pages;
