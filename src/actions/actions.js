import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAIL, SET_PAGE } from '../constants/constants';

export const fetchLoading = () => ({ type: FETCH_LOADING });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchFail = (error) => ({ type: FETCH_FAIL, payload: error });
export const setPage = (page) => ({ type: SET_PAGE, payload: page });
