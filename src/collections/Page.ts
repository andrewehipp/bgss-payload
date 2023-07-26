import { CollectionConfig } from 'payload/types';

import ContentHero from '../blocks/ContentHero';
import ContentTitle from '../blocks/ContentTitle';
import ContentCards from '../blocks/ContentCards';
import ContentBoxes from '../blocks/ContentBoxes';
import ContentContact from '../blocks/ContentContact';
import ContentCTA from '../blocks/ContentCTA';
import ContentFAQs from '../blocks/ContentFAQs';
import ContentServiceList from '../blocks/ContentServiceList';

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
				ContentTitle,
				ContentCards,
				ContentBoxes,
				ContentContact,
				ContentCTA,
				ContentFAQs,
				ContentServiceList,
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
