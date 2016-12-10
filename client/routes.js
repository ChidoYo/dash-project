import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import General from './components/General';
import NotFound from './components/NotFound';

export default (
  <Route>
    <Route path="/" component={App}>
      { /*<IndexRoute component={Home} /> */}
      <Route path='/general' component={General} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
)

// General
// Video
// Images/gifs
// Podcasts
