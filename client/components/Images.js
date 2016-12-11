import React from 'react';
import $ from 'jquery';


class Images extends React.Component {
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
    return medium.directory === "Images";
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
        <h3>Imagess</h3>
        <p>Here are your Images</p>
        <table>
         <thead className='center'>
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


export default Images;
