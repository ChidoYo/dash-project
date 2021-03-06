import React from 'react';
import { Link } from 'react-router';
import MediaInsert from '../components/MediaInsert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.links = this.links.bind(this);
    this.addMedia = this.addMedia.bind(this);
  }

  addMedia(e) {
      e.preventDefault();
      window.jQuery('.media-insert').toggleClass('show');
  }

  componentDidMount() {
    // window.jQuery('.button-collapse').sideNav();
  }

  links() {
    let navs = [
      {path: '/Bookmarks', text: 'Bookmarks', id:'Bookmarks'},
      {path: '/videos', text: 'Videos', id:'Videos' },
      {path: '/music', text: 'Music', id: 'Music'},
      {path: '/podcasts', text: 'Podcasts', id: 'Podcasts'},
      {path: '/images', text: 'Images/GIFs', id: 'Images'}
    ]

    return navs.map( (nav, i) => {
      let active = this.props.location.pathname === nav.path ? 'active' : ''
      return (<li className={active} key={i}><Link to={nav.path}>{nav.text}</Link></li>);
    });
  }

  render() {
    return (
      <div>
        <nav className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              {this.links()}
            </ul>
          </div>
          <div className="top-bar-right">
              <ul className="menu">
                  <li className="add-media"><a href="#" onClick={this.addMedia}>Add Media</a></li>
              </ul>
          </div>
        </nav>
        <MediaInsert />
        {this.props.children}
      </div>
    )
  }

};

export default App;
