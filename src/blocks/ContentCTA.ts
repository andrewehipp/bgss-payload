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
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-cta.png',
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
