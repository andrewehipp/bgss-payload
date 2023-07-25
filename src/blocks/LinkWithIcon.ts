import { Block } from 'payload/types';

import Media from '../collections/Media';
import Link from './Link';

// Extend Link to have an icon field too
const LinkWithIcon: Block = {
	slug: 'linkWithIcon',
    interfaceName: 'linkWithIcon',
	fields: [
		...Link.fields,
		{
			name: 'icon',
			type: 'text',
			admin: {
				description: 'Icons listed here. https://fontawesome.com/v4/examples/'
			}
		},
	],
};

export default LinkWithIcon;
