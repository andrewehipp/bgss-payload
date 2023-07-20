import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
	slug: 'media',
	upload: {
		staticURL: '/media',
		disableLocalStorage: true,
		imageSizes: [
			{
				name: 'thumbnail',
				width: 400,
				height: 400,
			},
		],
		adminThumbnail: 'thumbnail',
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
};

export default Media;