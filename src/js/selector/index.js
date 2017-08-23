export function getPath() {
  return window.getState().routing.locationBeforeTransitions.pathname
}

export function getTheme() {
  return window.getState().innerState.theme
}

export function getLang() {
  return window.getState().innerState.lang
}