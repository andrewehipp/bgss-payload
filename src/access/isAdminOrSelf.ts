// https://github.com/payloadcms/access-control-demo/blob/master/src/access/isAdminOrSelf.ts
import { Access } from "payload/types";
import { User } from "../payload";

export const isAdminOrSelf: Access<any, User> = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      }
    }
  }

  // Reject everyone else
  return false;
}