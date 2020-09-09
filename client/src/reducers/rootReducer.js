const initState = {
    posts: [
        {id: '1', name: 'firstProduct', type: 'might be beer'},
        {id: '2', name: 'secondProduct', type: 'might be beer again'},
        {id: '3', name: 'thirdProduct', type: 'might be something else'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
          return action.id !== post.id  
        });
        return {
            ...state,
            posts: newPosts           
        }
    }
    console.log(action);
    return state;
}

export default rootReducer;