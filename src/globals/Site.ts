import { GlobalConfig } from "payload/types";

import Media from '../collections/Media';
import Link from '../blocks/Link';

import { isLoggedInOrPublished } from '../access/isLoggedInOrPublished';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const Site: GlobalConfig = {
  slug: "site",
	versions: {
		drafts: {
			autosave: true,
		}
	},
	access: {
		read: isLoggedInOrPublished,
		update: isAdminOrEditor,
	},
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: Media.slug,
    },
    {
      name: "menuItems",
      type: "blocks",
      blocks: [
        Link,
      ]
    },
  ],
};

export default Site;
