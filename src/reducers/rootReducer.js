import { combineReducers } from 'redux';
import productReducer from './productReducer';
import paginationReducer from './paginationReducer';

export const rootReducer = combineReducers({
    products: productReducer,
    pagination: paginationReducer,
});