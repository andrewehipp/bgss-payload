// https://github.com/payloadcms/access-control-demo/blob/master/src/access/isLoggedIn.ts
import { Access } from "payload/config";
import { User } from "../payload";

export const isLoggedIn: Access<any, User> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
}