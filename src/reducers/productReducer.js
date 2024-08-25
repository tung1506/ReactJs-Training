import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAIL } from '../constants/constants';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            console.log('load');
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            console.log('done');
            return {
                ...state,
                loading: false,
                data: action.payload,
                totalPages: action.payload.totalPages,
            };
        case FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default productReducer;
