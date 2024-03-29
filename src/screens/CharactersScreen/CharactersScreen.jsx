import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCharacters as loadCharactersAction } from '../../store/actions';
import { getCharacters } from '../../store/reducers/characters';
import { CharactersList } from '../../components/CharactersList/CharactersList';
import { NavBar } from '../../components/NavBar/NavBar';
import './style.scss';

export const Characters = ({ characters, loadCharacters }) => {
  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="characters-page">
      <NavBar
        logoName="Swapp"
      />
      <section>
        <div className="character-list-holder">
          <CharactersList charactersList={characters} />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { characters } = getCharacters(state);

  return {
    characters,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadCharacters: loadCharactersAction,
}, dispatch);

export const CharactersScreen = connect(mapStateToProps, mapDispatchToProps)(Characters);
