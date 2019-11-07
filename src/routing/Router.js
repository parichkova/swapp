import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AppInitializer } from '../screens/AppInitializer/AppInitializer';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { EpisodesScreen } from '../screens/EpisodesScreen/EpisodesScreen';
import { CharactersScreen } from '../screens/CharactersScreen/CharactersScreen';
import { CharacterScreen } from '../screens/CharacterScreen/CharacterScreen';
import { EpisodeScreen } from '../screens/EpisodeScreen/EpisodeScreen';
import { StarshipScreen } from '../screens/StarshipScreen/StarshipScreen';

const AppRouter = () => (
  <Router>
    <Route exact path="/" render={(props) => <AppInitializer {...props} />} />
    <Route exact path="/login/" render={(props) => <LoginScreen {...props} />} />
    <Route exact path="/episodes/" render={(props) => <EpisodesScreen {...props} />} />
    <Route exact path="/characters/" render={(props) => <CharactersScreen {...props} />} />
    <Route exact path="/episodes/:id/" render={(props) => <EpisodeScreen {...props} />} />
    <Route exact path="/characters/:characterId/" render={(props) => <CharacterScreen {...props} />} />
    <Route exact path="/starships/:id/" render={(props) => <StarshipScreen {...props} />} />
  </Router>
);

export default AppRouter;
