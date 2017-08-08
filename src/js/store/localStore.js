import {
  storeName
} from './initialState'


export function getLocalStore(storeName) {
  try {
    return JSON.parse(localStorage[storeName])
  } catch (e) {
    return {}
  }
}

export function setLocalStore(obj) {
  localStorage[storeName] = JSON.stringify(obj)
}