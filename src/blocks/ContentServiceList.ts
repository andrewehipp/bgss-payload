import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentServiceList: Block = {
	slug: 'contentServiceList',
    interfaceName: 'contentServiceList',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-service-list.png',
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
		{
			name: "button",
			type: "array",
			maxRows: 1,
			fields: button()?.fields
		},
		{
			type: 'array',
			name: 'services',
			admin: {
				components: {
					RowLabel: ({ data }) => data?.title
				}	
			},
			fields: [
				{
					type: 'text',
					name: 'title',
				},
				{
					type: 'richText',
					name: 'body',
				},
				
			]
		},
	],
};

export default ContentServiceList;
