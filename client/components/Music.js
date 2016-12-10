import React from 'react';
import $ from 'jquery';


class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { media: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/media',
      type: 'GET'
    }).done( media => {
      this.setState({ media });
    });
  }


render() {
  let filteredMedia = this.state.media.filter( medium => {
    return medium.directory === "Music";
  })

  let media = filteredMedia.map( medium => {
    return (
      <li key={medium._id}>
      {medium.title} {medium.directory}
      </li>

      )
    });

  return (

      <div className="container">
        <h3>Music</h3>
        <p>Here is your music</p>
        <ul>
          {media}
        </ul>
      </div>
    )
  }
}

export default Music;
