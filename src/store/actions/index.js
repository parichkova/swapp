import * as action from './actionTypes';

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

function loginPending() {
    return {
        type: FETCH_USER_PENDING
    }
}

function loginSuccessful(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

function loginFailed(error) {
    return {
        type: FETCH_USER_ERROR,
        error
    }
}


export function fetchUser(e) {
    e.preventDefault();

    debugger;
    return dispatch => {
        dispatch(loginPending());
        fetch('https://exampleapi.com/products')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(loginSuccessful(res.products));

            return res.user;
        })
        .catch(error => {
            dispatch(loginFailed(error));
        })
    }
}
