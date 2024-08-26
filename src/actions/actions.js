import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAIL, SET_PAGE } from '../constants/constants';

export const fetchLoading = () => ({ type: FETCH_LOADING });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchFail = (error) => ({ type: FETCH_FAIL, payload: error });
export const setPage = (page) => ({ type: SET_PAGE, payload: page });


export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const SELECT_ITEM = 'SELECT_ITEM';

export const fetchItemsRequest = () => ({ type: FETCH_ITEMS_REQUEST });
export const fetchItemsSuccess = (items) => ({ type: FETCH_ITEMS_SUCCESS, payload: items });
export const fetchItemsFailure = (error) => ({ type: FETCH_ITEMS_FAILURE, payload: error });
export const selectItem = (item) => ({ type: SELECT_ITEM, payload: item });