import { CollapsibleField } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

import Link from '../blocks/Link';

const Button = ({
    overrides = {}
} = {}): CollapsibleField => deepMerge(
    {
        label: 'Heading',
        type: 'collapsible',
        admin: {
            initCollapsed: true,
        },
        fields: [
            ...Link.fields,
            {
                label: 'Appearance',
                type: 'collapsible',
                admin: {
                    initCollapsed: true,
                },
                fields: [
                    {
                        name: 'color',
                        type: 'select',
                        options: [
                            {
                                label: 'Primary',
                                value: 'primary',
                            },
                            {
                                label: 'Secondary',
                                value: 'secondary',
                            }
                        ]
                    },
                    {
                        name: 'size',
                        type: 'select',
                        options: [
                            {
                                label: 'Default',
                                value: 'default',
                            },
                            {
                                label: 'Small',
                                value: 'small',
                            }
                        ]
                    },
                    {
                        name: 'outlined',
                        type: 'checkbox',
                    },
                ]
            },
        ],
    },
    overrides
);

export default Button;
