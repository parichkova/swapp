import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './style.scss';

const Characters= ({ charactersList }) => {
  if (charactersList) {
    return charactersList.map((character) => (
      <Link to={`/characters/${character.node.id}`}>
        <div className="character-box" key={character.node.id}>
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

export const CharactersList = withRouter(Characters);
