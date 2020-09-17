import authReducer from './authReducer'
import productReducer from './productReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer
});

export default rootReducer

// the key name will be the data property on the state object