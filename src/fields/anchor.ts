import { Field } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

const Anchor = ({
    overrides = {}
} = {}): Field => deepMerge(
    {
        name: 'anchor',
        type: 'text',
        admin: {
            description: 'Value used for deep linking to page content'
        },
    },
    overrides
);

export default Anchor;
