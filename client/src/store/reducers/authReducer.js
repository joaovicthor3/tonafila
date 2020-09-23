const initState = {
    user: null,
    auth: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.payload.user,
                auth: true
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload.user,
                auth: true
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: null,
                auth: false
            }
        default:
            return state;            
    }
}

export default authReducer;