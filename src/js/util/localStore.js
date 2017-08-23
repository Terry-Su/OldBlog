import { localStorageName } from '../store/initialState'

export function setLocalStore(json) {
  const jsonStr = JSON.stringify(json)
  localStorage.setItem(localStorageName, jsonStr)
}

export function getLocalStore() {
  try {
    return JSON.parse(
      localStorage.getItem(localStorageName) 
    ) || {}
  } catch (e) {
    return {}
  }
}
