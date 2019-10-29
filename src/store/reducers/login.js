import { FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/index';

const initialState = {
    pending: false,
    user: [],
    error: null
}

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUser = state => state.products;
export const getPending = state => state.pending;
export const getError = state => state.error;