import { Block } from 'payload/types';

import anchorField from '../fields/anchor';

const ContentBoxes: Block = {
	slug: 'contentBoxes',
	labels: {
		singular: 'Content Boxes',
		plural: 'Content Boxes'
	},
    interfaceName: 'contentBoxes',
	imageURL: 'https://raw.githubusercontent.com/andrewehipp/bgss-payload/44f2f8b2129d5ec076d6347580b4f7d852d9d265/assets/content-boxes.png',
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
