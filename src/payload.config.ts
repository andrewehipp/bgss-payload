import { buildConfig } from 'payload/config';
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import formBuilder from "@payloadcms/plugin-form-builder";
import seo from '@payloadcms/plugin-seo';
import path from 'path';

// Collections
import Users from './collections/Users';
import Media from './collections/Media';
import Page from './collections/Page';

// Globals
import Site from './globals/Site';

// Components
import BeforeDashboard from './components/BeforeDashboard';
import AfterDashboard from './components/AfterDashboard';
import BeforeLogin from './components/BeforeLogin';

// Endpoints
import { siteEndpoint } from './endpoints/site';

export default buildConfig({
	admin: {
		css: path.resolve(__dirname, 'index.scss'),
    components: {
      beforeDashboard: [BeforeDashboard],
      afterDashboard: [AfterDashboard],
      graphics: {
        Icon: BeforeLogin,
        Logo: BeforeLogin,
      },
    },
	},
  email: {
    fromName: 'Breaking Ground Soil Services',
    fromAddress: 'contact@bgsoilservices.com',
    transportOptions: {
      service: 'mailgun',
      auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASS,
      },
    }
  },
  plugins: [
    cloudinaryPlugin(),
    formBuilder({
      redirectRelationships: ["pages"],
    }),
    seo({
      collections: [
        'pages',
      ],
      globals: [
        'site'
      ],
      uploadsCollection: 'media',
    })
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
  ],
})
