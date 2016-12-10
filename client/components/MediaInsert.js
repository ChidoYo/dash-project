import React from 'react';

class MediaInsert extends React.Component {
    render() {
        return (
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
        )
    }
}

export default MediaInsert;
