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

export default ContentContact;
