import { buildConfig } from 'payload/config';
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import formBuilder from "@payloadcms/plugin-form-builder";
import path from 'path';

// Collections
import Users from './collections/Users';
import Media from './collections/Media';
import Page from './collections/Page';

// Globals
import Site from './globals/Site';

// Endpoints
import { siteEndpoint } from './endpoints/site';

export default buildConfig({
  plugins: [
    cloudinaryPlugin(),
    formBuilder({
      redirectRelationships: ["pages"],
    }),
  ],
  collections: [
    Users,
    Media,
    Page,
  ],
  globals: [
    Site,
  ],
  endpoints: [
    siteEndpoint,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload.d.ts'),
  },
  cors: [
    'http://localhost:3001',
    'http://localhost:3000',
    'https://bgsoilservices.com',
    'https://www.bgsoilservices.com',
    'https://breakinggroundsoilservices.com',
    'https://www.breakinggroundsoilservices.com',
    'https://bgss-front-develop.vercel.app',
    'https://bgss-front.vercel.app'
  ]
})
