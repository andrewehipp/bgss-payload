import { Block } from 'payload/types';

import Media from '../collections/Media';
import Button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentHero: Block = {
	slug: 'contentHero',
    interfaceName: 'contentHero',
	imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			name: 'slides',
			type: 'array',
			fields: [
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
					name: 'background',
					type: 'upload',
					relationTo: Media.slug,
					filterOptions: {
						mimeType: { contains: 'image' },
					},
				},
				{
					name: 'mobileBackground',
					type: 'upload',
					relationTo: Media.slug,
					filterOptions: {
						mimeType: { contains: 'image' },
					},
				},
				{
					name: 'backgroundVideo',
					type: 'upload',
					relationTo: Media.slug,
					filterOptions: {
						mimeType: { contains: 'video' },
					},
				},
			]
		},
	],
};

export default ContentHero;
