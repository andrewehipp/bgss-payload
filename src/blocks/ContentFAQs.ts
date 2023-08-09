import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentFAQs: Block = {
	slug: 'contentFAQs',
	labels: {
		singular: 'Content FAQs',
		plural: 'Content FAQs'
	},
    interfaceName: 'contentFAQs',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-faqs.png',
	fields: [
		anchorField(),
		{
			type: 'array',
			name: 'groupsOfQuestions',
			admin: {
				components: {
					RowLabel: ({ data, index, path }) => data?.title
				}	
			},
			fields: [
				{
					type: 'text',
					name: 'title',
				},
				{
					type: 'array',
					name: 'questions',
					admin: {
						components: {
							RowLabel: ({ data, index, path }) => data?.question
						}	
					},
					fields: [
						{
							type: 'text',
							name: 'question',
						},
						{
							type: 'richText',
							name: 'answer',
						},
						
					]
				},
			]
		},
		{
			type: 'richText',
			name: 'sidebar'
		}
	],
};

export default ContentFAQs;
