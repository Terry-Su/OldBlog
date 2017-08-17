export function getPath() {
  return window.getState().routing.locationBeforeTransitions.pathname
}