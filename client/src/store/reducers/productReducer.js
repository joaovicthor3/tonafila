import axios from 'axios'

const initState = {
    products: [
        {id: '1', name: 'Heineken', type: 'pale lager beer ', amount: 300, price: 300, description: 'run and get it!'},
        {id: '2', name: 'Budweiser', type: 'american lager beer', amount: 400, price: 275, description: 'the colder the better'},
        {id: '3', name: 'Stella', type: 'belgian pilsner', amount: 500, price: 350, description: 'the stronger the better'}
    ]
}

const productReducer = (state = initState, action) => {
    console.log('action.payload: ', action.payload);
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