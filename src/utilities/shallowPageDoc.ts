import { hydrateData } from "./hydrateData";
import { Page } from '../payload';

export const shallowPageDoc = (data: any) => hydrateData<Page, Partial<Page>>(
    data,
    (page) => Boolean(page.content),
    ({ slug }) => ({ slug }),
)