import { CollapsibleField } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

const Heading = ({
    overrides = {}
} = {}): CollapsibleField => deepMerge(
    {
        label: 'Heading',
        type: 'collapsible',
        admin: {
            initCollapsed: true,
        },
        fields: [
            {
                name: 'heading',
                type: 'text',
            },
            {
                name: 'headingSize',
                type: 'select',
                options: [
                    {
                        label: 'Heading 1',
                        value: 'h1',
                    },
                    {
                        label: 'Heading 2',
                        value: 'h2',
                    },
                    {
                        label: 'Heading 3',
                        value: 'h3',
                    },
                    {
                        label: 'Heading 4',
                        value: 'h4',
                    },
                    {
                        label: 'Heading 5',
                        value: 'h5',
                    },
                ],
            },
            {
                name: 'headingColor',
                type: 'select',
                options: [
                    {
                        label: 'Default',
                        value: 'default',
                    },
                    {
                        label: 'Red',
                        value: 'red',
                    },
                ]
            },
        ],
    },
    overrides
);

export default Heading;
