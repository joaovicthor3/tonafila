import axios from 'axios'
import { CREATE_PRODUCT, GET_PRODUCTS } from './actionTypes';

export const createProduct = (product) => {
    return (dispatch) => {
        // make async call to database
        return axios.post('/api/products', product)
        .then(res => {
            dispatch(createProductSuccess(res.data));
        })
        .catch(err => {
            throw (err);
        })
    }
};

export const createProductSuccess = (product) => {
    return {
        type: CREATE_PRODUCT,
        payload: {
            product
        }
    };
};

export const getAllProducts = () => {
    return (dispatch) => {
        return axios.get('/api/products')
            .then(res => {
                dispatch(getAllProductsSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
 /*   axios.get('/api/products')
            .then((response) => {
                this.setState({ products: response.data });
                console.log('Data has been received!');
            //    console.log(response.data);
            })
            .catch(() => {
                console.log('Error retrieving data!');
            });*/
}

export const getAllProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: {
            products
        }
    };
};