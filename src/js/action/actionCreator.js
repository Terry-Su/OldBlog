export function createActions(actions) {
  Object.keys(actions).map(key => {
    const defaultAction = actions[key]
    actions[key] = createAction(key, defaultAction)
  })
  return actions
}

export function createAction(name, defaultAction) {
  return (...arg) => {
    window.ReduxStore.dispatch({
      type: name,
      ...defaultAction(...arg)
    })
  }
}