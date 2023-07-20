import { Access } from 'payload/types';
import { User } from "../../payload-types";

export const isLoggedInOrPublished: Access<any, User> = ({ req: { user } }) => {
    // a logged in user will be able to read all posts
    if (user) {
        return true;
    }

    // a guest will see only posts that have been published for
    // published at a time before the current time for the request
    return {
        _status: {
            equals: 'published',
        },
    };
}