import { CollectionConfig } from 'payload/types';

import ContentHero from '../blocks/ContentHero';
import ContentCards from '../blocks/ContentCards';
import ContentContact from '../blocks/ContentContact';
import ContentCTA from '../blocks/ContentCTA';

import internalReferenceTitle from '../fields/internalReferenceTitle';
import { isLoggedInOrPublished } from '../access/isLoggedInOrPublished';

import { triggerAfterChangeWebhook, triggerDeleteWebhook } from '../hooks/triggerWebhook';

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
				ContentContact,
				ContentCTA,
			]
		},
	],
	access: {
		read: isLoggedInOrPublished,
	},
	hooks: {
		afterChange: [triggerAfterChangeWebhook],
		afterDelete: [triggerDeleteWebhook]
	}
};

export default Pages;
