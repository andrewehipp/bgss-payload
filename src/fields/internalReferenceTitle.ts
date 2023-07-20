import { Field } from 'payload/types';

import deepMerge from '../utilities/deepMerge';

const internalReferenceTitle = ({
    overrides = {}
} = {}): Field => deepMerge(
    {
        name: 'internalReferenceTitle',
        type: 'text',
        required: true,
        admin: {
            description: 'Unique Title used for organizing content internally.',
        },
    },
    overrides
);

export default internalReferenceTitle;
