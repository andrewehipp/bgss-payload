import { Block } from 'payload/types';

import Media from '../collections/Media';
import button from '../fields/button';

import anchorField from '../fields/anchor';

const ContentServices: Block = {
	slug: 'contentServices',
    interfaceName: 'contentServices',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			name: 'preheading',
			type: 'text'
		},
		{
			name: 'heading',
			type: 'text'
		},
		{
			name: 'copy',
			type: 'text'
		},
		{
			name: "buttons",
			type: "array",
			fields: button()?.fields
		},
		{
			name: "services",
			type: "array",
			fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'copy',
                    type: 'text',
                }
            ]
		},
	],
};

export default ContentServices;
