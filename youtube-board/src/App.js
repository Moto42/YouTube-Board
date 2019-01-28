import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ButtonDisplay from './ButtonDisplay';
import VideoButton from './VideoButton'

class App extends Component {

  playVideo(videoID){
    window.alert(`Video ${videoID} playing`);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ButtonDisplay>
          <VideoButton videoID="Vo1u3IIOmX4" thumbnailNumber='1' playVideo={this.playVideo} />
        </ButtonDisplay>
        <Footer/>
      </div>
    );
  }
}

export default App;
