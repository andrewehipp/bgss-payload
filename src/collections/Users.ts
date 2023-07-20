import { CollectionConfig } from 'payload/types';

import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';
import { isAdminOrSelf } from '../access/isAdminOrSelf';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // useAPIKey: true,
    maxLoginAttempts: 3,
    // Ten minute lockout
    lockTime: 1000 * 60 * 10
  },
  admin: {
    group: 'Admin',
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      // Save this field to JWT so we can access it on `req.user`,
      saveToJWT: true,
      type: 'select',
      defaultValue: 'editor',
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin'
        },
        {
          label: 'Editor',
          value: 'editor'
        }
      ]
    }
  ],
};

export default Users;