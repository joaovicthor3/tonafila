import axios from 'axios'
import { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from './actionTypes';

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
}

export const getAllProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: {
            products
        }
    };
};

export const getOneProduct = (id) => {
    return (dispatch) => {
        return axios.get(`/api/products/${id}`,)
            .then(res => {
                dispatch(getOneProductSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
}

export const getOneProductSuccess = (product) => {
    return {
        type: GET_PRODUCT,
        payload: {
            product
        }
    };
};