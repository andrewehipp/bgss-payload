import { buildConfig } from 'payload/config';
import path from 'path';

// Collections
import Users from './collections/Users';
import Media from './collections/Media';
import Page from './collections/Page';

// Globals
import Site from './globals/Site';

export default buildConfig({
  collections: [
    Users,
    Media,
    Page,
  ],
  globals: [
    Site,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
