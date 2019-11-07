import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SmallCard } from '../SmallCard/SmallCard';
import './style.scss';

const Characters = ({ charactersList }) => {
  if (charactersList) {
    return charactersList.map((character) => (
      <Link
        className="character-list-item"
        key={character.node.id}
        to={`/characters/${character.node.id}`}
      >
        <SmallCard
          image={character.node.image}
          text={character.node.name}
        />
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
