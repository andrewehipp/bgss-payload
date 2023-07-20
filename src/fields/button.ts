import { CollapsibleField } from "payload/types";
import deepMerge from "../utilities/deepMerge";

import Link from "../blocks/Link";

const Button = ({ overrides = {} } = {}): CollapsibleField =>
  deepMerge(
    {
      label: "Heading",
      type: "collapsible",
      admin: {
        initCollapsed: true,
      },
      fields: [
        ...Link.fields,
        {
          label: "Appearance",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "option",
              type: "select",
              options: [
                {
                  label: "Default",
                  value: "default",
                },
                {
                  label: "Primary",
                  value: "primary",
                },
                {
                  label: "Success",
                  value: "success",
                },
                {
                  label: "Info",
                  value: "info",
                },
                {
                  label: "Warning",
                  value: "warning",
                },
                {
                  label: "Danger",
                  value: "danger",
                },
                {
                  label: "Link",
                  value: "link",
                },
              ],
            },
            {
              name: "size",
              type: "select",
              options: [
                {
                  label: "Default",
                  value: "default",
                },
                {
                  label: "Extra Small",
                  value: "xs",
                },
                {
                  label: "Small",
                  value: "sm",
                },
                {
                  label: "Large",
                  value: "lg",
                },
              ],
            },
            {
              name: "border",
              type: "checkbox",
            },
            {
              type: "text",
              name: "classes",
              admin: {
                description: "https://getbootstrap.com/docs/3.4/css/#buttons",
              },
            },
          ],
        },
      ],
    },
    overrides
  );

export default Button;
