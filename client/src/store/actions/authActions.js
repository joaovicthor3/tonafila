import axios from 'axios'
import { CREATE_USER, GET_USER } from './actionTypes';

export const createUser = (user) => {
    return (dispatch) => {
        // make async call to database
        return axios.post('/api/users', user)
        .then(res => {
            dispatch(createUserSuccess(res.data));
        })
        .catch(err => {
            throw (err);
        })
    }
};

export const createUserSuccess = (user) => {
    return {
        type: CREATE_USER,
        payload: {
            user
        }
    };
};

export const getUser = (id) => {
    return (dispatch) => {
        return axios.get(`/api/users/${id}`,)
            .then(res => {
                dispatch(getUserSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
}

export const getUserSuccess = (user) => {
    return {
        type: GET_USER,
        payload: {
            user
        }
    };
};