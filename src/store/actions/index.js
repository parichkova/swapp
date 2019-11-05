import * as action from './actionTypes';
import { CookieHelper } from '../../helpers/Cookies';

const url = 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql';

const loginSuccessful = (user) => {
  CookieHelper.setCookie('token', user.signIn.token);

  return {
    type: action.FETCH_USER_SUCCESS,
    session: {
      isLoggedIn: true,
      error: '',
    },
  };
};

const loginFailed = (error) => ({
  type: action.FETCH_USER_ERROR,
  session: {
    isLoggedIn: false,
    error,
  },
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
  error,
});

const loadCharacterSuccess = ({ person }) => ({
  type: action.LOAD_CHARACTER_SUCCESS,
  characterLoaded: person,
});

const loadCharacterFail = (error) => ({
  type: action.LOAD_CHARACTER_SUCCESS,
  error,
});

const loadEpisodeSuccess = ({ episode }) => ({
  type: action.LOAD_EPISODE_SUCCESS,
  episodeLoaded: episode,
});

const loadEpisodeFail = (error) => ({
  type: action.LOAD_EPISODE_FAIL,
  error,
});

// [TODO] get these credentials from .env file and gitignore it
export const fetchUser = (e, email, password) => {
  const query = `mutation {
        signIn(email: "${email}", password: "${password}"){
        token
       }
    }`;
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };

  e.preventDefault();

  return (dispatch) => {
    fetch(url, opts)
      .then((res) => res.json())
      .then((res) => {

        // IF I used axios I would not throw errors
        if (!res) {
          throw new Error('Unsuccessful login');
        }

        dispatch(loginSuccessful(res.data));
      })
      .catch((errors) => {
        let message = 'Unsuccessful login';

        if (errors[0] && errors[0].message) {
          message = errors[0].message;
        }
        dispatch(loginFailed(message));
      });
  };
};


export const loadEpisodes = () => {
  const query = `query
    {
        allEpisodes(first:6) {
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  };

  return (dispatch) => {
    fetch(url, opts)
      .then((res) => res.json())
      .then((res) => {
        dispatch(loadEpisodesSuccess(res.data.allEpisodes));
      })
      .catch((error) => {
        dispatch(loadEpisodesFail(error));
      });
  };
};

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
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  };

  return (dispatch) => {
    fetch(url, opts)
      .then((res) => res.json())
      .then((res) => {
        dispatch(loadCharactersSuccess(res.data));
      })
      .catch((error) => {
        dispatch(loadCharactersFail(error));
      });
  };
};

export const loadCharacter = (id) => {
  const query = `query {
    person(id: "${id}") {
      id,
      name,
      birthYear,
      mass,
      image,
    }
  }`;

  const token = CookieHelper.getCookie('token');
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  };

  return (dispatch) => {
    fetch(url, opts)
      .then((res) => res.json())
      .then((res) => {
        dispatch(loadCharacterSuccess(res.data));
      })
      .catch((error) => {
        dispatch(loadCharacterFail(error));
      });
  };
};


export const loadEpisode = (id) => {
  const query = `query {
    person(id: "${id}") {
      id,
      name,
      birthYear,
      mass,
      image,
    }
  }`;

  const token = CookieHelper.getCookie('token');
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  };

  return (dispatch) => {
    fetch(url, opts)
      .then((res) => res.json())
      .then((res) => {
        dispatch(loadEpisodeSuccess(res.data));
      })
      .catch((error) => {
        dispatch(loadEpisodeFail(error));
      });
  };
};
