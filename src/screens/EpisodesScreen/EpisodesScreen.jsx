import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { loadEpisodes as loadEpisodesAction } from '../../store/actions';
import { getEpisodes } from '../../store/reducers/episodes';
import { EpisodesList } from '../../components/EpisodesList/EpisodesList';
import { NavBar } from '../../components/NavBar/NavBar';
import './styles.scss';

export const Episodes = ({ episodes, loadEpisodes }) => {
  useEffect(() => {
    loadEpisodes();
  }, []);

  return (
    <div className="episodes-page">
      <NavBar
        logoName="Swapp"
      />
      <section>
        <EpisodesList episodesList={episodes} />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { episodes } = getEpisodes(state);

  return {
    episodes,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadEpisodes: loadEpisodesAction,
}, dispatch);

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.object),
  loadEpisodes: PropTypes.func.isRequired,
};

Episodes.defaultProps = {
  episodes: [],
};

export const EpisodesScreen = connect(mapStateToProps, mapDispatchToProps)(Episodes);
