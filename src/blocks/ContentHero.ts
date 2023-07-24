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
			name: 'preheading',
			type: 'text'
		},
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
