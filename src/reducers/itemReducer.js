// reducers.js
import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, SELECT_ITEM } from '../actions/actions';

const initialState = {
    items: [],
    error: null,
    selectedItem: null,
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            return { ...state, items: action.payload };
        case FETCH_ITEMS_FAILURE:
            return { ...state, error: action.payload };
        case SELECT_ITEM:
            return { ...state, selectedItem: action.payload };
        default:
            return state;
    }
};

export default itemsReducer;
