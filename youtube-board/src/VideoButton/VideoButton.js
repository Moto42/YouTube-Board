import React, {Component} from 'react';
import './VideoButton.css';


// https://img.youtube.com/vi/<insert-youtube-video-id-here>/#.jpg
// # is 0 for full size image, or 1,2,3 for the thumbnails

class VideoButton extends Component {
  constructor(props) {
    super(props);
    const thumbnailNumber = props.thumbnailNumber >= 1 && props.thumbnailNumber <= 3 ? props.thumbnailNumber : 1;
    this.state = {
      thumbnailNumber : props.thumbnailNumber,
      videoID : props.videoID,
      thumbNailUrl : `https://img.youtube.com/vi/${props.videoID}/${thumbnailNumber}.jpg`
    };
    this.playVideo = this.playVideo.bind(this);
  };

  playVideo() {
    this.props.playVideo(this.state.videoID);
  };

  render(){
    return (
      <div className="videoButton" onClick={this.playVideo}>
        <img src={this.state.thumbNailUrl} />
      </div>
    )
  }

}

export default VideoButton;
