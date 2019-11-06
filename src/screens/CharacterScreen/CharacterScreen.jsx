import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadCharacter as loadCharacterAction } from '../../store/actions';
import { getCharacterLoaded } from '../../store/reducers/characterLoaded';
import { SmallCard } from '../../components/SmallCard/SmallCard';

export const Character = ({ id: { characterId }, loadCharacter, characterLoaded }) => {
  useEffect(() => {
    setTimeout(() => loadCharacter(characterId), 0);
  }, [characterId]);

  const character = characterLoaded && characterLoaded.characterLoaded;

  return (
    <div className="character-page">
      {character && (
        <>
          <p className="character-name-title">
            {character.name}
          </p>
          <div>
            <div className="character-holder">
              <div
                className="character-main"
              >
                {character.name}
                <img
                  style={{ width: '100px' }}
                  src={character.image}
                  alt={character.name}
                />
                <div className="character-more">
                  <p>
                    <span className="property">Height:</span>
                    {character.height}
                  </p>
                  <p>
                    <span className="property">Weight:</span>
                    {character.mass}
                  </p>
                  <p>
                    <span className="property">Classification:</span>
                    {character.species.classification}
                  </p>
                  <p>
                    <span className="property">Home world:</span>
                    {character.homeworld && character.homeworld.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="spaceship-list">
              <p>Piloted Starship</p>
              <div>
                {character.starships
                  && character.starships.edges.map((edge) => (
                    <Link
                      key={edge.node.id}
                      to={`/starships/${edge.node.id}`}
                    >
                      <SmallCard
                        image={edge.node.image}
                        text={edge.node.name}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params,
  characterLoaded: getCharacterLoaded(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadCharacter: loadCharacterAction,
}, dispatch);

Character.propTypes = {
  id: PropTypes.shape({
    characterId: PropTypes.string,
  }),
  characterLoaded: PropTypes.object,
  loadCharacter: PropTypes.func,
};

Character.defaultProps = {
  id: {},
  characterLoaded: {},
  loadCharacter: () => {},
};

export const CharacterScreen = connect(mapStateToProps, mapDispatchToProps)(Character);
