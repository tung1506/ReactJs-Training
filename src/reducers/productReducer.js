// reducer.js
import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAIL, SET_PAGE } from '../constants/constants';

const initialState = {
    loading: false,
    data: [],
    error: null,
    currentPage: 1,
    totalPages: 0,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                totalPages: action.payload.totalPages,
            };
        case FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case SET_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};

export default productReducer;
