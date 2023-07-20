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
  slug?: string;
  content?: (ContentHero | ContentHero)[];
  updatedAt: string;
  createdAt: string;
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
    option?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
    size?: 'default' | 'xs' | 'sm' | 'lg';
    border?: boolean;
    classes?: string;
    id?: string;
  }[];
  image?: string | Media;
  id?: string;
  blockName?: string;
  blockType: 'contentHero';
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