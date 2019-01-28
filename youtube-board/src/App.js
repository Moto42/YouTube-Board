import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ButtonDisplay from './ButtonDisplay';
import VideoButton from './VideoButton';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo : '',
    }
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo(videoID) {
    this.setState({currentVideo:videoID});
  };


  render() {
    return (
      <div className="App">
        <Header/>
        <ButtonDisplay>
          <VideoButton videoID="Vo1u3IIOmX4" thumbnailNumber='1' playVideo={this.playVideo} />
          <VideoButton videoID="MhNrsUiL6bY" thumbnailNumber='2' playVideo={this.playVideo} />
        </ButtonDisplay>
        <VideoPlayer videoId={this.state.currentVideo} />
        <Footer/>
      </div>
    );
  }
}

export default App;
