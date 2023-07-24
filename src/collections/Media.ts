import { CollectionConfig } from 'payload/types';

import { triggerAfterChangeWebhook, triggerDeleteWebhook } from '../hooks/triggerWebhook';

const Media: CollectionConfig = {
	slug: 'media',
	upload: {
		disableLocalStorage: true,
		imageSizes: [
			{
				name: 'thumbnail',
				width: 400,
				height: 400,
			},
		],
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
		},
		{
			name: 'description',
			type: 'text',
		},
	],
	access: {
		read: () => true
	},
	hooks: {
		afterChange: [triggerAfterChangeWebhook],
		afterDelete: [triggerDeleteWebhook]
	}
};

export default Media;