import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes'

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('content'));

const Bookmark = () => (
 <div className="container">
   <h3>Bookmarks</h3>
   <p>Here are your bookmarks</p>
 </div>
)

export default Bookmark;

