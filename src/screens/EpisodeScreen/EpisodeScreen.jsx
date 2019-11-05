import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadEpisode as loadEpisodeAction } from '../../store/actions';
import { getEpisodeLoaded } from '../../store/reducers/episodeLoaded';
import { Card } from '../../components/Card/Card';

export const Episode = ({ id: { id }, episodeLoaded, loadEpisode }) => {
  useEffect(() => {
    loadEpisode(id);
  }, [id]);

  let episode = {};

  if (episodeLoaded) {
    episode = episodeLoaded.episodeLoaded;
  }

  return (
    <div className="episode-page">
      <Card
        title={episode && episode.title}
        image={episode && episode.image}
      />

      <div className="more-info">
        <p className="description">
          {episode && episode.openingCrawl}
        </p>
        {episode && (
          <div>
            <p>
              Director:
              {episode && episode.director}
            </p>
            <p>
              Release Date:
              {episode && episode.releaseDate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params,
  episodeLoaded: getEpisodeLoaded(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadEpisode: loadEpisodeAction,
}, dispatch);

export const EpisodeScreen = connect(mapStateToProps, mapDispatchToProps)(Episode);
