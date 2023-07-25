import { Block } from 'payload/types';

import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentCTA: Block = {
	slug: 'contentCTA',
	labels: {
		plural: 'Content CTAs',
		singular: 'Content CTA',
	},
    interfaceName: 'contentCTA',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			name: 'body',
			type: 'richText'
		},
		{
			name: "buttons",
			type: "array",
			fields: button()?.fields
		},
	],
};

export default ContentCTA;
