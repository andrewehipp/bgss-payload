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
			type: 'upload',
			relationTo: Media.slug,
			filterOptions: {
				mimeType: { contains: 'image' },
			},
		},
	],
};

export default LinkWithIcon;
