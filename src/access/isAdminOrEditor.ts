//https://github.com/payloadcms/access-control-demo/blob/master/src/access/isAdminOrEditor.ts
import { Access, FieldAccess } from "payload/types";
import { User } from "../payload";

export const isAdminOrEditor: Access<any, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(['admin', 'editor'].includes(user?.roles));
}

export const isAdminOrEditorFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(['admin', 'editor'].includes(user?.roles));
}