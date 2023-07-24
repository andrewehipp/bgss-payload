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
			type: 'collapsible',
			label: 'Contact Form',
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
				}
			]
		},
		{
			type: 'collapsible',
			label: 'Contact Info',
			fields: [
				{
					name: 'heading',
					type: 'text'
				},
				{
					name: 'body',
					type: 'richText'
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
					name: 'form',
					type: 'relationship',
					relationTo: 'forms'
				}
			]
		},
	],
};

export default ContentContact;
