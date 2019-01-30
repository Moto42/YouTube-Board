import React, {Component} from 'react';
import YouTube from "react-youtube";
import "./VideoPlayer.css";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.hidePlayer = this.hidePlayer.bind(this);
  }

  hidePlayer(){
    this.props.hidePlayer();
  }

  render() {
    return(
      <div
        className={this.props.visible===true ? "videoplayer visible" : "videoplayer"}
      >
        <YouTube
          videoId = {this.props.videoId}
          opts    = {{
            playerVars : {
              autoplay : 1,
              controls : 0,
              disablekb: 1,
              modestbranding : 1,
            }
          }}
          onPause = {this.hidePlayer}
          onEnd   = {this.hidePlayer}
        />
      </div>
    )
  }
}

export default VideoPlayer;
