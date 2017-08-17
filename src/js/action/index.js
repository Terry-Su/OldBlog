import { createActions } from './actionCreator'

const action = createActions({
  MODIFY_INNERSTATE(key, value) {
    return {
      key,
      value
    }
  }
})



export default action