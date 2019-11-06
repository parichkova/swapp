import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const Characters = ({ charactersList }) => {
  if (charactersList) {
    return charactersList.map((character) => (
      <Link
        key={character.node.id}
        to={`/characters/${character.node.id}`}
      >
        <div className="character-box">
          <img src={character.node.image} alt={character.node.name} />
          <div className="character-name">
            <span>
              {character.node.name}
            </span>
          </div>
        </div>
      </Link>
    ));
  }
  return <div> No characters... </div>;
};

Characters.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
};

Characters.defaultProps = {
  charactersList: [],
};

export const CharactersList = withRouter(Characters);
