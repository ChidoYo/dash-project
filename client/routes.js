import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import Bookmarks from './components/Bookmarks'
import Videos from './components/Videos'
import Music from './components/Music'
import Podcasts from './components/Podcasts'
import Images from './components/Images'

export default (
  <Route>
    <Route path="/" component={App}>
      { /*<IndexRoute component={Home} /> */}
      <Route path="/videos" component={Videos} />
      <Route path="/music" component={Music} />
      <Route path="/podcasts" component={Podcasts} />
      <Route path="/images" component={Images} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
)

// General
// Video
// Images/gifs
// Podcasts
