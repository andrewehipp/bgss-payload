import { Block } from 'payload/types';

import anchorField from '../fields/anchor';

const ContentContactForm: Block = {
	slug: 'contentContactForm',
    interfaceName: 'contentContactForm',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-contact.png',
	fields: [
		anchorField(),
		{
			type: 'group',
			name: 'contactForm',
			fields: [
				{
					name: 'body',
					type: 'richText'
				},
				{
					name: 'form',
					type: 'relationship',
					relationTo: 'forms'
				}
			]
		},
		{
			type: 'group',
			name: 'contactInfo',
			fields: [
				{
					name: 'body',
					type: 'richText'
				},
			]
		},
	],
};

export default ContentContactForm;
