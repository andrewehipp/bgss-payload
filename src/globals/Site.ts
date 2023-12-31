import { GlobalConfig } from "payload/types";

import Media from '../collections/Media';
import Link from '../blocks/Link';
import LinkWithIcon from '../blocks/LinkWithIcon';

import { isLoggedInOrPublished } from '../access/isLoggedInOrPublished';
import { isAdminOrEditor } from '../access/isAdminOrEditor';
import { triggerAfterChangeWebhook } from "../hooks/triggerWebhook";

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
					admin: {
						components: {
							RowLabel: ({ data }) => data?.label
						}	
					},
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
                    description: "If Submenu items are set the site will render them as a dropdown menu.",
                    components: {
                      RowLabel: ({ data }) => data?.label
                    }	
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
          type: 'richText',
          name: 'contact'
        },
        {
          type: "text",
          name: 'firstMenuTitle',
        },
        {
          type: "blocks",
          name: 'firstMenuLinks',
          blocks: [
            Link,
          ]
        },
        {
          type: "text",
          name: 'secondMenuTitle',
        },
        {
          type: "blocks",
          name: 'secondMenuLinks',
          blocks: [
            Link,
          ]
        },
        {
          type: 'richText',
          name: 'body'
        },
        {
          type: 'text',
          name: 'disclaimer'
        }
      ]
    },
  ],
	hooks: {
		afterChange: [triggerAfterChangeWebhook],
	}
};

export default Site;
