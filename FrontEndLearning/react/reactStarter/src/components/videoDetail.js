import React from 'react'

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log("video detail wala...props..will be empty", props)
    }
    render() {
        if (!this.props.video) {
            return <div>Loading....</div>;
        }
        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;
        const description = this.props.video.snippet.description;
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{description}</div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;