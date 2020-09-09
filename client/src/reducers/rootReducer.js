const initState = {
    posts: [
        {id: '1', name: 'firstProduct', type: 'might be beer'},
        {id: '2', name: 'secondProduct', type: 'might be beer again'},
        {id: '3', name: 'thirdProduct', type: 'might be something else'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;