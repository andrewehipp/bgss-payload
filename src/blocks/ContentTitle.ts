import { Block } from 'payload/types';

import anchorField from '../fields/anchor';

const ContentTitle: Block = {
	slug: 'contentTitle',
    interfaceName: 'contentTitle',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-title.png',
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
