import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadEpisode as loadEpisodeAction } from '../../store/actions';
import { getEpisodeLoaded } from '../../store/reducers/episodeLoaded';

export const Episode = ({ id: { id }, loadEpisode, episodeLoaded }) => {
  debugger;
  useEffect(() => {
    debugger;
    loadEpisode(id);
  }, [id]);

  return (
    <div className="episode-page">
      <p>Here card should stay</p>
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
