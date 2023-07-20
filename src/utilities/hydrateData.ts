import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

export function hydrateData<T, K = T>(
  data: any,
  condition: (conditionData: T) => boolean,
  handler: (handlerData: T) => K
) {
  // If no data do nothing
  if (!data) return null

  // If we have data check it and maybe do something with it
  if (condition(data)) {
    return handler(data)
  }

  // If we're dealing with an array we just loop the same logic on each item
  if (isArray(data)) {
    return data.map((item) => hydrateData(item, condition, handler))
  }

  // If it's an object loop each property
  if (isObject(data)) {
    return Object.keys(data).reduce(
      (acc, key) => ({
        ...acc,
        [key]: hydrateData(data[key], condition, handler),
      }),
      {}
    )
  }

  // Return any other kind of value unmodified
  return data
}
