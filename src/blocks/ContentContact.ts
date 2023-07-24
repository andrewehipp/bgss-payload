import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentContact: Block = {
	slug: 'contentContact',
    interfaceName: 'contentContact',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			type: 'group',
			name: 'contactForm',
			fields: [
				{
					name: 'heading',
					type: 'text'
				},
				{
					name: 'subHeader',
					type: 'text'
				},
				{
					name: 'copy',
					type: 'text'
				},
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
					name: 'heading',
					type: 'text'
				},
				{
					name: 'subHeader',
					type: 'text'
				},
				{
					name: 'copy',
					type: 'text'
				},
				{
					name: 'body',
					type: 'richText'
				},
			]
		},
	],
};

export default ContentContact;
