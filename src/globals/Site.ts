import { GlobalConfig } from "payload/types";

import Media from '../collections/Media';
import Link from '../blocks/Link';
import LinkWithIcon from '../blocks/LinkWithIcon';

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
      type: 'group',
      name: 'contact',
      fields: [
        {
          type: 'array',
          name: 'contactInfo',
          fields: [
            ...LinkWithIcon.fields
          ]
        }
      ]
    },
    {
      type: 'group',
      name: 'header',
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
            {
              ...Link,
              interfaceName: 'menuItem',
              fields: [
                ...Link.fields,
                {
                  type: 'array',
                  name: 'submenu',
                  admin: {
                    description: "If Submenu items are set the site will render them as a dropdown menu."
                  },
                  fields: [
                    ...Link.fields
                  ]
                }
              ]
            },
          ]
        },
      ]
    },
    {
      type: 'group',
      name: 'footer',
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

      ]
    },
  ],
};

export default Site;
