import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import { loadCharacters as loadCharactersAction } from '../../store/actions/';
import { getCharacters } from '../../store/reducers/characters';
import { bindActionCreators } from 'redux';
import { CharactersList } from '../../components/CharactersList/CharactersList';

export const Characters = ({ characters, loadCharacters }) => {
    useEffect(() => {
        loadCharacters();
    }, []);

    console.log(characters)
    return (
        <div>
            Tish
            <CharactersList charactersList={characters} />
        </div>
    )
}

const mapStateToProps = (state) => { 
    const { characters } = getCharacters(state);

    return {
        characters
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadCharacters: loadCharactersAction,
}, dispatch)

export const CharactersScreen = connect(mapStateToProps, mapDispatchToProps)(Characters);