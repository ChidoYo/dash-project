import React from 'react';
import $ from 'jquery';

class MediaInsert extends React.Component {
  constructor(props) {
    super(props);
    this.addMedium = this.addMedium.bind(this);
    this.state = { media: [] }
  }

  addMedium(e) {
    e.preventDefault();
    console.log("doing the thing");
    let { title, url, directory, form } = this.refs;
    $.ajax({
      url: '/api/media',
      type: 'POST',
      data: { title: title.value, url: url.value, directory: directory.value }
    }).done( medium => {
      form.reset();
      this.setState({ media: [...this.state.media, medium] });
    });
  }


    render() {
        return (
          <section className="media-insert">
            <form ref="form" onSubmit={this.addMedium}>
              <div className="row">
                  <div className="columns large-4">
                      <input type="text" ref="title" placeholder="Title" />
                  </div>
                  <div className="columns large-4">
                      <input type="text" ref="url" placeholder="Paste Url Here" />
                  </div>
                  <div className="columns large-3">
                      <select ref="directory">
                          <option>Bookmarks</option>
                          <option>Videos</option>
                          <option>Music</option>
                          <option>Podcasts</option>
                          <option>Images/GIFs</option>
                      </select>
                  </div>
                  <div className="columns large-1">
                      <button className="button warning small" type="submit">Do it!</button>
                  </div>
              </div>
            </form>
          </section>
        )
    }
}

export default MediaInsert;
