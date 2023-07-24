import { Endpoint } from 'payload/config';
import { shallowPageDoc } from '../utilities/shallowPageDoc';

export const siteEndpoint: Endpoint = {
    path: "/site",
    method: "get",
    handler: async (req, res, next) => {
        const site = await req.payload.findGlobal({ slug: 'site' });
        if (site) {
            res.status(200).send(shallowPageDoc(site));
        } else {
            res.status(404).send({ error: "not found" });
        }
    },
}