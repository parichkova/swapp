import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadEpisode as loadEpisodeAction } from '../../store/actions';
import { getEpisodeLoaded } from '../../store/reducers/episodeLoaded';
import { Card } from '../../components/Card/Card';
import './style.scss';

export const Episode = ({ id: { id }, episodeLoaded, loadEpisode }) => {
  useEffect(() => {
    loadEpisode(id);
  }, [id]);

  const episode = episodeLoaded && episodeLoaded.episodeLoaded;

  return (
    <div className="episode-page">
      {episode
        && (
          <>
            <div className="main-episode-info">
              <img src={episode.image} alt={episode.image} />
              <div>
                <h2>
                    Star Wars: Episode
                  {episode.episodeId}
                </h2>
                <p>
                  {episode.title}
                </p>
              </div>
            </div>

            <div className="more-info">
              <p className="description">
                {episode.openingCrawl}
              </p>
              <div>
                <p>
                  Director:
                  <span>{episode.director}</span>
                </p>
                <p>
                  Release Date:
                  <span>{episode.releaseDate}</span>
                </p>
              </div>
            </div>
          </>
        )}
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
