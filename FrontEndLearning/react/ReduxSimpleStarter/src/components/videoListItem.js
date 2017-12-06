import React from 'react';

class VideoListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("videolist item....", props);
    }
    handleVideoItemClick(event) {
        this.props.onVideoSelect(this.props.video);
    }
    render() {
        const video = this.props.video;
        const imgUrl = video.snippet.thumbnails.default.url;
        return (
            <li className="list-group-item video-item " onClick={this.handleVideoItemClick.bind(this)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoListItem;