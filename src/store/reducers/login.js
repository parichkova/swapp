import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pending: false,
    user: [],
    error: null
}

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_USER_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload
            }
        case actionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUser = state => state.session;
export const getPending = state => state.pending;
export const getError = state => state.error;