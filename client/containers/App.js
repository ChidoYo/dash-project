import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.links = this.links.bind(this);
  }

  /*componentDidMount() {
    window.jQuery('.button-collapse').sideNav();
  }*/

  links() {
    let navs = [
      {path: '/', text: 'Bookmarks', id:'Bookmarks'},
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
        </nav>
        {this.props.children}
      </div>
    )
  }

};

export default App;
