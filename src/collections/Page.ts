import { CollectionConfig } from 'payload/types';

import ContentHero from '../blocks/ContentHero';
import ContentCards from '../blocks/ContentCards';

import internalReferenceTitle from '../fields/internalReferenceTitle';
import { isLoggedInOrPublished } from '../access/isLoggedInOrPublished';

const Pages: CollectionConfig = {
	slug: 'pages',
	versions: {
		drafts: true,
	},
	admin: {
		useAsTitle: 'internalReferenceTitle',
		defaultColumns: [
			'internalReferenceTitle',
			'slug',
			'status',
		]
	},
	fields: [
		internalReferenceTitle(),
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
	access: {
		read: isLoggedInOrPublished,
	}
};

export default Pages;
