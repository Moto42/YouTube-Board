import React, { Component } from 'react';
import './App.css';

import Header         from './Header';
import Footer         from './Footer';
import ButtonDisplay  from './ButtonDisplay';
import VideoPlayer    from './VideoPlayer';
import Button         from './Button';
import AddButtonModal from './AddButtonModal'

import img_addbuton      from './images/addButton.jpg';
import img_buttonOverlay from './VideoButton/overlay.png';

function isJson(str){
  try {
    JSON.parse(str);
  } catch(e) {
    return false;
  }
  return true;
}

//returns an array of video objects
// { videoID: STRING, thumbnail: NUMBER 1-3 }
function getVideoList(){
  const localString = window.localStorage.videoList;
  if(isJson(localString)){
    const localVersion = JSON.parse(window.localStorage.videoList);
    const localValid = ( Array.isArray(localVersion) && !!localVersion[0].videoID );
    if(localValid) return localVersion;
  }
  const defaultList = require("./data/videoList");
  return defaultList.default;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo         : '',
      playerVisible        : false,
      addbuttonModalVisible: false,
      videoList            : [],
    }
    this.componentDidMount   = this.componentDidMount.bind(this);
    this.playVideo           = this.playVideo.bind(this);
    this.hidePlayer          = this.hidePlayer.bind(this);
    this.showAddbuttonModal  = this.showAddbuttonModal.bind(this);
    this.hideAddbuttonModal  = this.hideAddbuttonModal.bind(this);
    this.addButton           = this.addButton.bind(this);
    this.saveVideoList       = this.saveVideoList.bind(this);
    this.removeButton        = this.removeButton.bind(this);
  }

  componentDidMount() {
    document.title = "YouTube SoundBoard";
    const videoList = getVideoList();
    this.setState({videoList:videoList})
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

  showAddbuttonModal(){
    this.setState({addbuttonModalVisible:true});
  }

  hideAddbuttonModal() {
    this.setState({addbuttonModalVisible:false})
  }

  saveVideoList(list){
    const jsonList = JSON.stringify(list);
    window.localStorage.setItem('videoList',jsonList);
  }

  addButton(button) {
    const videoList = [...this.state.videoList,button];
    this.setState({videoList : videoList});
    this.saveVideoList(videoList);
  }

  removeButton(vid){
    const list = this.state.videoList.filter(video => video.videoID !== vid);
    this.saveVideoList(list);
    this.setState({videoList : list});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ButtonDisplay videos={this.state.videoList} playVideo={this.playVideo} removeButton={this.removeButton}>
          <Button action={this.showAddbuttonModal} className='videoButton'>
            <img className="videoImg" src={img_addbuton} alt="Add A Button" />
            <img className="buttonOverlay" src={img_buttonOverlay} alt='Add A Button' />
          </Button>
        </ButtonDisplay>
        <VideoPlayer
          visible={this.state.playerVisible}
          videoId={this.state.currentVideo}
          hidePlayer={this.hidePlayer}
        />
        <AddButtonModal
        visible={this.state.addbuttonModalVisible}
        hideAddbuttonModal={this.hideAddbuttonModal}
        addButton = {this.addButton}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
