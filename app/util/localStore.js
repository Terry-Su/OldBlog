export const getLocalStore = (key) => {
  try {
    return JSON.parse(localStorage[key])
  } catch (e) {
    return {}
  }
}

export const setLocalStore = (key, object) => {
  localStorage[key] = JSON.stringify(object)
}