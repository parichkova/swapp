import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCharacter as loadCharacterAction } from '../../store/actions';
import { getCharacterLoaded } from '../../store/reducers/characterLoaded';

export const Character = ({ id: { characterId }, loadCharacter, characterLoaded }) => {
    useEffect(() => {
        loadCharacter(characterId);
    }, [characterId]);

    console.log(characterLoaded);
    return (
        <div className="character-page">
            <p>Test</p>
        </div>)
};

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params,
    characterLoaded: getCharacterLoaded(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadCharacter: loadCharacterAction,
}, dispatch);

export const CharacterScreen = connect(mapStateToProps, mapDispatchToProps)(Character);
