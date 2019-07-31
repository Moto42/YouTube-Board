import React, {Component} from 'react';
import Button from '../Button';
import './VideoButton.css';
import overlayIMG from './overlay.png';

//Youtube thumnail API endpoint
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
    this.removeButton = this.removeButton.bind(this);
  };

  playVideo() {
    this.props.playVideo(this.state.videoID);
  };

  removeButton() {
    this.props.removeButton(this.state.videoID);
  }

  render(){
    return (
      <div className="vbuttonContainer">
        <Button className="removeButton" action={this.removeButton}>
          &#x2718;
        </Button>
        <div className="videoButton">
          <img className="videoImg"
            src={this.state.thumbNailUrl}
            alt="Vide Thumbnail"
          />
          <img className="buttonOverlay"
            src={overlayIMG}
            onClick={this.playVideo}
            alt="Play Video"
          />
        </div>
      </div>
    )
  }

}

export default VideoButton;
