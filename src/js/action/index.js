import { createActions } from './actionCreator'

const action = createActions({
  UPDATE_ROUTE(value) {
    return {
      value
    }
  },

  UPDATE_ROUTEINFO(value) {
    return {
      value
    }
  },
})



export default action