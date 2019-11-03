import * as actionTypes from '../actions/actionTypes';

export function charactersReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOAD_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.characters.allPeople.edges
            }
        case actionTypes.LOAD_CHARACTERS_FAIL:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getCharacters = state =>  {
    return state.characters
};
