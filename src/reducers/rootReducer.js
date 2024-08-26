import { combineReducers } from 'redux';
import productReducer from './productReducer';
import paginationReducer from './paginationReducer';
import itemReducer from './itemReducer';

export const rootReducer = combineReducers({
    products: productReducer,
    pagination: paginationReducer,
    item: itemReducer
});