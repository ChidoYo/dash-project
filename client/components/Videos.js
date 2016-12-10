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
        let media = this.state.media.map( medium => {
            return (
                <li key={medium._id}>
                {medium.title}
                </li>
            )
        });

        return (
            <div className="container">
                <h3>Videos</h3>
                <p>Here are your videos</p>
                <ul>
                    {media}
                </ul>
            </div>
        )
    }
}
export default Videos;
