/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    pages: Page;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    site: Site;
  };
}
export interface User {
  id: string;
  name?: string;
  roles?: 'admin' | 'editor';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  alt?: string;
  description?: string;
  cloudinary?: {
    public_id?: string;
    original_filename?: string;
    format?: string;
    secure_url?: string;
    resource_type?: string;
  };
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Page {
  id: string;
  internalReferenceTitle: string;
  slug?: string;
  content?: (ContentHero | ContentCards | ContentContact)[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface ContentHero {
  anchor?: string;
  preheading?: string;
  heading?: string;
  copy?: string;
  buttons?: {
    label?: string;
    linkType: 'link' | 'page';
    link: string;
    page: string | Page;
    openInNewTab?: boolean;
    option?: 'default' | 'text' | 'border';
    size?: 'default' | 'xs' | 'sm' | 'lg';
    classes?: string;
    id?: string;
  }[];
  image?: string | Media;
  id?: string;
  blockName?: string;
  blockType: 'contentHero';
}
export interface ContentCards {
  anchor?: string;
  cards?: {
    thumbnail?: string | Media;
    title?: string;
    copy?: string;
    button?: {
      label?: string;
      linkType: 'link' | 'page';
      link: string;
      page: string | Page;
      openInNewTab?: boolean;
      option?: 'default' | 'text' | 'border';
      size?: 'default' | 'xs' | 'sm' | 'lg';
      classes?: string;
      id?: string;
    }[];
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'contentCards';
}
export interface ContentContact {
  anchor?: string;
  contactForm?: {
    body?: {
      [k: string]: unknown;
    }[];
    form?: string | Form;
  };
  contactInfo?: {
    body?: {
      [k: string]: unknown;
    }[];
  };
  id?: string;
  blockName?: string;
  blockType: 'contentContact';
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    type?: 'reference' | 'custom';
    reference: {
      value: string | Page;
      relationTo: 'pages';
    };
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Site {
  id: string;
  menuItems?: Link[];
  logo?: string | Media;
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface Link {
  label?: string;
  linkType: 'link' | 'page';
  link: string;
  page: string | Page;
  openInNewTab?: boolean;
  Submenu?: {
    label?: string;
    linkType: 'link' | 'page';
    link: string;
    page: string | Page;
    openInNewTab?: boolean;
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'link';
}
