import { Block } from 'payload/types';

import Link from './Link';

import anchorField from '../fields/anchor';

const ContentBoxes: Block = {
	slug: 'contentBoxes',
	labels: {
		singular: 'Content Boxes',
		plural: 'Content Boxes'
	},
    interfaceName: 'contentBoxes',
	// imageURL: '/media/content-hero.png',
	fields: [
		anchorField(),
		{
			name: "boxes",
			type: "array",
			fields: [
				{
					name: 'body',
					type: 'richText',
				},
				{
					name: 'appearance',
					type: 'select',
					options: [
						{
							value: 'default',
							label: 'Default'
						},
						{
							value: 'border',
							label: 'Border'
						},
						{
							value: 'boxed',
							label: 'Boxed'
						},
						{
							value: 'inversed',
							label: 'Inversed'
						},
					]
				},
			]
		},
	],
};

export default ContentBoxes;
