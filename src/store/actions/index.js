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


const query = `mutation {
    signIn(email: "demo@st6.io", password: "demo1234"){
     token
   }
}`;

const url = "http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({query})
};


export function fetchUser(e) {
    e.preventDefault();

    debugger;
    return dispatch => {
        dispatch(loginPending());
        fetch(url, opts)
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
