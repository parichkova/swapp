import React, { useEffect } from 'react';

export const EpisodesList = ({ episodesList }) => {
    useEffect(() =>{
        console.log('change')
    }, [episodesList]);

    if (episodesList) {
        return episodesList.map(episode => {
            return (
                <div key={episode.node.id}>
                    {episode.node.title}
                    <img src={episode.node.image} alt={episode.node.text} />
                    <p>{episode.node.openCrawl}</p>
                </div>
            )
        })
    } else {
        return <div> No episodes... </div>
    } 
}