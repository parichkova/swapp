import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import { loadEpisodes as loadEpisodesAction } from '../../store/actions/';
import { getEpisodes } from '../../store/reducers/episodes';
import { bindActionCreators } from 'redux';
import { EpisodesList } from '../../components/EpisodesList/EpisodesList';

export const Episodes = ({ episodes, loadEpisodes }) => {
    useEffect(() => {
        loadEpisodes();
    }, []);

    console.log(episodes)
    return (
        <div>
            Tish
            <EpisodesList episodesList={episodes} />
        </div>
    )
}

const mapStateToProps = (state) => { 
    const { episodes } = getEpisodes(state);

    return {
        episodes
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadEpisodes: loadEpisodesAction,
}, dispatch)

export const EpisodesScreen = connect(mapStateToProps, mapDispatchToProps)(Episodes);