import React from 'react';
import $ from 'jquery';


class Videos extends React.Component {
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
    return medium.directory === "Videos";
  })

  let media = filteredMedia.map( medium => {
    return (
         <tr key={medium._id}>
          <td> {medium.title} </td>
          <td> <a href={medium.url} target="_blank">{medium.url}</a> </td>
         </tr>

      )
    });

  return (

      <div className="container">
        <h3>Videos</h3>
        <p>Here are your videos</p>
        <table>
         <thead class='center' direc>
            <th>Title</th>
            <th>URL</th>
         </thead>
         <tbody>
          {media}
        </tbody>
      </table>
      </div>
    )
  }
}

export default Videos;
