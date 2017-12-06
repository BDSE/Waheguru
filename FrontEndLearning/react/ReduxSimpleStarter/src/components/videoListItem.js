import React from 'react';

class VideoListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("videolist item....", props);
    }
    render() {
        const video = this.props.video;
        return (<li>video</li>)
    }
}

export default VideoListItem;