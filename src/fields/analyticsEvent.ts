import { Field } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

const analyticsEvent = ({
    overrides = {}
} = {}): Field => deepMerge(
    {
        type: 'collapsible',
        label: 'Analytics Event',
        fields: [
            {
                name: 'eventCategory',
                type: 'text',
                admin: {
                    description: 'Values set here will be sent to google analytics.'
                }
            },
            {
                name: 'eventLabel',
                type: 'text',
            },
            {
                name: 'eventValue',
                type: 'text',
            },
        ],
        admin: {
            initCollapsed: true,
        },
    },
    overrides
);

export default analyticsEvent;
