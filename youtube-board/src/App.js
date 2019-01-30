import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ButtonDisplay from './ButtonDisplay';
import VideoButton from './VideoButton';
import VideoPlayer from './VideoPlayer';

//returns an array of video objects
// { videoID: STRING, thumbnail: NUMBER 1-3 }
function getVideoList(){
  const dalist = require("./data/videoList");
  console.log(dalist);
  return dalist.default;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo : '',
      playerVisible: false,
    }
    this.playVideo = this.playVideo.bind(this);
    this.hidePlayer = this.hidePlayer.bind(this);
  }

  playVideo(videoID) {
    this.setState({
      currentVideo:videoID,
      playerVisible: true,
    });
  };

  hidePlayer(){
    this.setState({
      currentVideo : '',
      playerVisible : false,
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <ButtonDisplay videos={getVideoList()} playVideo={this.playVideo}>
          <VideoButton videoID="Vo1u3IIOmX4" thumbnailNumber='3' playVideo={this.playVideo} />
          <VideoButton videoID="MhNrsUiL6bY" thumbnailNumber='1' playVideo={this.playVideo} />
        </ButtonDisplay>
        <VideoPlayer visible={this.state.playerVisible} videoId={this.state.currentVideo} hidePlayer={this.hidePlayer} />
        <Footer />
      </div>
    );
  }
}

export default App;
