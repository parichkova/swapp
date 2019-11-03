import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { EpisodesScreen } from '../screens/EpisodesScreen/EpisodesScreen';
import { CharactersScreen } from '../screens/CharactersScreen/CharactersScreen';
import { StarshipsScreen } from '../screens/StarshipsScreen/StarshipsScreen';

const AppRouter = () => (
    <Router>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/login" render={(props) => <LoginScreen {...props} />} />
      <Route exact path="/episodes" render={(props) => <EpisodesScreen {...props} />} />
      <Route exact path="/characters" render={(props) => <CharactersScreen {...props} />} />
      <Route exact path="/episodes/:episodeId" render={(props) => <EpisodesScreen {...props} />} />
      <Route exact path="/characters/:characterId " render={(props) => <CharactersScreen {...props} />} />
      <Route exact path="/starships/:starshipId " render={(props) => <StarshipsScreen {...props} />} />

    </Router>
);

export default AppRouter;