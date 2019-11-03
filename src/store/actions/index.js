import * as action from './actionTypes';
import { CookieHelper} from '../../helpers/Cookies';

const url = "http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql";

const loginSuccessful = (user) => {
    CookieHelper.setCookie('token', user.signIn.token)

    return {
        type: action.FETCH_USER_SUCCESS,
        session: {
            isUserSignedIn: true,
            error: '',
        }
    }
}

const loginFailed = (error) => ({
    type: action.FETCH_USER_ERROR,
        session: {
            isUserSignedIn: false,
            error,
        }
    }
);

const loadEpisodesSuccess = (data) => ({
    type: action.LOAD_EPISODES_SUCCESS,
    data,
});

const loadEpisodesFail = (error) => ({
    type: action.LOAD_EPISODES_FAIL,
    error,
});


const loadCharactersSuccess = (characters) => ({
    type: action.LOAD_CHARACTERS_SUCCESS,
    characters,
});

const loadCharactersFail = (error) => ({
    type: action.LOAD_CHARACTERS_FAIL,
    error
})


// [TODO] get these credentials from .env file and gitignore it
export const fetchUser = (e) => {
    const query = `mutation {
        signIn(email: "demo@st6.io", password: "demo1234"){
        token
       }
    }`;
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      };
      

    e.preventDefault();

    return dispatch => {
        fetch(url, opts)
        .then(res => res.json())
        .then(res => {
            dispatch(loginSuccessful(res.data));
        })
        .catch(error => {
            dispatch(loginFailed(error));
        })
    }
}


export const loadEpisodes = () => {
    const query = `query
    {
        allEpisodes(first:5) {
        edges {
        node {
            id, 
            title,
            episodeId,
            openingCrawl,
            image,
            director,
            releaseDate
            }
        },
        totalCount
    }
}`;

    const token = CookieHelper.getCookie('token');

    const opts = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ query })
    };
      
    return dispatch => {
        fetch(url, opts)
        .then(res => res.json())
        .then(res => {
            dispatch(loadEpisodesSuccess(res.data.allEpisodes));
        })
        .catch(error => {
            dispatch(loadEpisodesFail(error));
        })
    }
}

export const loadCharacters = () => {
    const query = `
    query{
        allPeople(first: 12) {
          edges{
                node{
               id,
                name,
                birthYear,
                height,
                mass,
                image,
                homeworld {
                  name,
                  id,
                  diameter,
                  population,
                },
                species{
                  id,
                  name,
                  classification,
                }
              }
          },
          totalCount
        }
      }`;

    const token = CookieHelper.getCookie('token');
    const url = "http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql";
    const opts = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ query })
    };

    return dispatch => {
        fetch(url, opts)
        .then(res => res.json())
        .then(res => {
            debugger;
            dispatch(loadCharactersSuccess(res.data));
        })
        .catch(error => {
            dispatch(loadCharactersFail(error));
        })
    }
}