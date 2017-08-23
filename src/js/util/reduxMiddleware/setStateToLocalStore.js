import {
  setLocalStore
} from '../localStore'

/**
 * Sync the localStorage
 */
export default function setStateToLocalStore({ getState }) {
  return next => action => {
    const returnValue = next(action)

    setLocalStore(getState())
    
    return returnValue
  }
}