import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadEpisodes as loadEpisodesAction } from '../../store/actions';
import { getEpisodes } from '../../store/reducers/episodes';
import { EpisodesList } from '../../components/EpisodesList/EpisodesList';
import './styles.scss';

export const Episodes = ({ episodes, loadEpisodes }) => {
  loadEpisodes();

  return (
    <div className="episodes-page">
      <EpisodesList episodesList={episodes} />
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

export const EpisodesScreen = connect(mapStateToProps, mapDispatchToProps)(Episodes);
