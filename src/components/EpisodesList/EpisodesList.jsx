import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.scss';

const Episodes = ({ episodesList }) => {
  if (episodesList) {
    return episodesList.map((episode) => (
      <Link
        key={episode.node.id}
        to={`/episodes/${episode.node.id}`}
      >
        <div
          className="episode-wrapper"
        >
          <img src={episode.node.image} alt={episode.node.text} />
          <p className="episode-title">
            {episode.node.title}
          </p>
          <p className="episode-info">{episode.node.openingCrawl}</p>
        </div>
      </Link>
    ));
  }
  return <div> No episodes... </div>;
};

export const EpisodesList = withRouter(Episodes);
