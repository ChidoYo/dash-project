import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.links = this.links.bind(this);
  }

  componentDidMount() {
    // window.jQuery('.button-collapse').sideNav();
    var element = ReactDOM.findDOMNode(this.refs.test);
    element.setAttribute('custom-attribute', 'some value');
  }

  links() {
    let navs = [
      {path: '/', text: 'Bookmarks'},
      {path: '/videos', text: 'Videos'},
      {path: '/music', text: 'Music'},
      {path: '/podcasts', text: 'Podcasts'},
      {path: '/images', text: 'Images/GIFs'}
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
                  <li class="add-media"><a href="#">Add Media</a></li>
              </ul>
          </div>
        </nav>
        <section className="media-insert">
            <form>
                <div className="row">
                    <div className="columns large-4">
                        <input type="text" ref="title" placeholder="Title" />
                    </div>
                    <div className="columns large-4">
                        <input type="text" ref="title" placeholder="Title" />
                    </div>
                    <div className="columns large-3">
                        <select>
                            <option>Bookmarks</option>
                            <option>Videos</option>
                            <option>Music</option>
                            <option>Podcasts</option>
                            <option>Images/GIFs</option>
                        </select>
                    </div>
                    <div className="columns large-1">
                        <a href="#" className="button warning small">Do it!</a>
                    </div>
                </div>
            </form>
        </section>
        {this.props.children}
      </div>
    )
  }
};

export default App;
