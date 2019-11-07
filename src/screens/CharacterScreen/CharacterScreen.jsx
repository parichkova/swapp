import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { loadCharacter as loadCharacterAction } from '../../store/actions';
import { getCharacterLoaded } from '../../store/reducers/characterLoaded';
import { SmallCard } from '../../components/SmallCard/SmallCard';
import { NavBar } from '../../components/NavBar/NavBar';
import './style.scss';

export const Character = ({ id: { characterId }, loadCharacter, characterLoaded }) => {
  useEffect(() => {
    setTimeout(() => loadCharacter(characterId), 0);
  }, [characterId]);

  const character = characterLoaded && characterLoaded.characterLoaded;

  return (
    <div className="character-page">
      <NavBar
        logoName="Swapp"
      />
      {character && (
        <section>
          <h1 className="character-name-title">
            {character.name}
          </h1>
          <hr />
          <div>
            <div className="character-holder">
              <div>
                <div
                  className="character-main"
                >
                  <p>
                    {character.name}
                  </p>
                  <img
                    src={character.image}
                    alt={character.name}
                  />
                </div>
              </div>
              <div className="character-more">
                <p>
                  Height: 
                  <span className="property">{character.height}</span>
                </p>
                <p>
                  Weight: 
                  <span className="property">{character.mass}</span>
                </p>
                <p>
                  Species: 
                  <span className="property">{character.species.name}</span>
                </p>
                <p>
                  Home world: 
                  <span className="property">{character.homeworld && character.homeworld.name}</span>
                </p>
              </div>
            </div>

            <div className="spaceship-list">
              <h2>Piloted Starship</h2>
              <hr />
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
        </section>
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
  loadCharacter: () => { },
};

export const CharacterScreen = connect(mapStateToProps, mapDispatchToProps)(Character);
