import initialInnerState from '../store/innerState'

export default function innerState(state = initialInnerState, action) {
    switch (action.type) {
        case 'MODIFY_INNERSTATE':
            // key exsits
            if (Object.keys(state).some(key => key === action.key)) {
                return {
                    ...state,
                    [action.key]: action.value
                }
            }
            return state
        default:
            return state
    }
}