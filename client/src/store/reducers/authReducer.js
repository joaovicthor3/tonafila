const initState = {
    user: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.payload.user
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;            
    }
}

export default authReducer;