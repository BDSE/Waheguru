import React from 'react';
import VideoListItem from './videoListItem';
// const VideoList = (props) => {
//     return (
//         <ul className="col-md-4">
//             {props.videos.length}
//         </ul>
//     )
// }

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.state = { videos: props.obj.videos };
    }

    render() {
        this.list = this.props.obj.videos.map((video) => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={this.props.onVideoSelect}
                />
            )
        }
        )
        return (
            <ul className="col-md-4 list-group" >
                {this.list}
            </ul>
        )
    }
}

// const VideoList = function (props) {
//     const list = props.obj.videos.map(function (video) {
//         return <VideoListItem video={video} />
//     })
//     //props can be used as this.props anywhere in the class as if class is inhgeriting from some invisible class
//     return (
//         <ul className="col-md-4 list-group">
//             <li>{props.obj.videos.length}</li>
//             <li>{props.obj.test}</li>
//             {list}
//         </ul>
//     )
// }

export default VideoList;