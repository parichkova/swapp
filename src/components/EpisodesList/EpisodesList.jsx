import React, { useEffect } from 'react';
import './styles.scss';

export const EpisodesList = ({ episodesList }) => {
  useEffect(() => {
  }, [episodesList]);

  if (episodesList) {
    return episodesList.map((episode) => (
      <div
        key={episode.node.id}
        className=""
      >
        {episode.node.title}
        <img src={episode.node.image} alt={episode.node.text} />
        <p className="episode-info">{episode.node.openCrawl}</p>
      </div>
    ));
  }
  return <div> No episodes... </div>;
};
