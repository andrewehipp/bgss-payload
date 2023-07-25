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
	// imageURL: '/media/content-hero.png',
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
