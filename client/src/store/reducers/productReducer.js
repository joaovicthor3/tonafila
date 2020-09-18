const initState = {
    product: null,
    products: []
}

const productReducer = (state = initState, action) => {
    //console.log('action.payload: ', action.payload);
    switch (action.type) {
        case 'CREATE_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                products : [...action.payload.products]
            }
        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload.product
            }
                    
    }
   /* if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
          return action.id !== post.id  
        });
        return {
            ...state,
            posts: newPosts           
        }
    }*/
    return state;
}

export default productReducer;