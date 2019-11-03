import React, { useEffect } from 'react';

export const CharactersList = ({ charactersList }) => {
    useEffect(() =>{
        console.log('change')
    }, [charactersList]);

    if (charactersList) {
        return charactersList.map(character => {
            return (
                <div key={character.node.id}>
                    {character.node.name}
                    <img src={character.node.image} alt={character.node.name} />
                </div>
            )
        })
    } else {
        return <div> No characters... </div>
    } 
}