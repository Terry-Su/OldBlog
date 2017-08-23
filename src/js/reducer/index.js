import { combineReducers } from 'redux'

import {
    getLocalStore
} from '../util/localStore'

const localStore = getLocalStore()

export function getBlogReducer(blogData) {
    return (state = blogData, action) => {
        switch (action.type) {
            default:
                return state
        }
    }
}


export function getTotalReducer({
    ...reducers
}) {
    return function(state=localStore, action) {
        return combineReducers({
            ...reducers
        })(state, action)
    }
}
