export default function getReducer(blogData) {
    return (state = blogData, action) => {
        switch (action.type) {
            case 'UPDATE_ROUTE':
                return {
                    ...state,
                    route: action.value
                }
            case 'UPDATE_ROUTEINFO':
                return {
                    ...state,
                    routeInfo: {
                        ...state.routeInfo,
                        ...action.value
                    } 
                }
            default:
                return state
        }
    }
}