import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload/types';
import debound from 'lodash/debounce';

export const triggerAfterChangeWebhook: CollectionAfterChangeHook = debound(async () => {
    const stagingRes = await fetch(process.env.PAYLOAD_PUBLIC_WEBHOOK_BUILD_STAGING).then(res => res.json())
    const prodRes = await fetch(process.env.PAYLOAD_PUBLIC_WEBHOOK_BUILD_PRODUCTION).then(res => res.json())
    console.log(stagingRes, prodRes)
}, 20000);

export const triggerDeleteWebhook: CollectionAfterDeleteHook = debound(async () => {
    const stagingRes = await fetch(process.env.PAYLOAD_PUBLIC_WEBHOOK_BUILD_STAGING).then(res => res.json())
    const prodRes = await fetch(process.env.PAYLOAD_PUBLIC_WEBHOOK_BUILD_PRODUCTION).then(res => res.json())
    console.log(stagingRes, prodRes)
}, 20000);