import { Block } from 'payload/types';

import anchorField from '../fields/anchor';

const ContentTitle: Block = {
	slug: 'contentTitle',
    interfaceName: 'contentTitle',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			type: 'text',
			name: 'title',
		},
		{
			type: 'richText',
			name: 'body',
		},
	],
};

export default ContentTitle;
