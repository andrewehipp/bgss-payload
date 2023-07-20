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
      type: 'collapsible',
      label: 'Header',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "menuItems",
          type: "blocks",
          blocks: [
            {
              ...Link,
              fields: [
                ...Link.fields,
                // {
                //   type: 'array',
                //   name: 'Submenu',
                //   admin: {
                //     description: "If Submenu items are set the will render a dropdown."
                //   },
                //   fields: [
                //     ...Link.fields
                //   ]
                // }
              ]
            },
          ]
        },
      ]
    },
    {
      type: 'collapsible',
      label: 'Footer',
      admin: {
        initCollapsed: true,
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
            {
              ...Link,
              fields: [
                ...Link.fields,
                {
                  type: 'array',
                  name: 'Submenu',
                  admin: {
                    description: "If Submenu items are set the will render a dropdown."
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
      type: 'collapsible',
      label: 'Site Wide',
      admin: {
        initCollapsed: true,
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
            {
              ...Link,
              fields: [
                ...Link.fields,
                {
                  type: 'array',
                  name: 'Submenu',
                  admin: {
                    description: "If Submenu items are set the will render a dropdown."
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
    }
  ],
};

export default Site;
