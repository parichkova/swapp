import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes, { string } from 'prop-types';
import { loadEpisode as loadEpisodeAction } from '../../store/actions';
import { getEpisodeLoaded } from '../../store/reducers/episodeLoaded';
import { SmallCard } from '../../components/SmallCard/SmallCard';
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
            <div className="characters-list">
              {episode.people
              && episode.people.edges.map((edge) => (
                <SmallCard
                  key={edge.node.id}
                  image={edge.node.image}
                  text={edge.node.name}
                />
              ))}
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

Episode.propTypes = {
  id: PropTypes.shape({
    id: string,
  }),
  episodeLoaded: PropTypes.object,
  loadEpisode: PropTypes.func,
};

Episode.defaultProps = {
  id: {},
  episodeLoaded: {},
  loadEpisode: () => {},
};
