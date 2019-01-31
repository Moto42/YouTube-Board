import React, { Component } from 'react';
import './App.css';

import Header         from './Header';
import Footer         from './Footer';
import ButtonDisplay  from './ButtonDisplay';
import VideoButton    from './VideoButton';
import VideoPlayer    from './VideoPlayer';
import Button         from './Button';
import AddButtonModal from './AddButtonModal'

import img_addbuton  from './images/addButton.jpg';

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
  console.log(defaultList);
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
  }

  componentDidMount() {
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
    const list  = [...this.state.videoList];
    const index = list.findIndex(e => e.videoID === vid);
    const newList = list.slice(0,index).concat(list.slice(index+1));
    this.setState({videoList : newList})
    this.saveVideoList(newList);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddButtonModal
          visible={this.state.addbuttonModalVisible}
          hideAddbuttonModal={this.hideAddbuttonModal}
          addButton = {this.addButton}
          hideAddbuttonModal = {this.hideAddbuttonModal}
        />
        <ButtonDisplay videos={this.state.videoList} playVideo={this.playVideo} removeButton={this.removeButton}>
          <Button action={this.showAddbuttonModal} className='videoButton'>
            <img src={img_addbuton} />
          </Button>
        </ButtonDisplay>
        <VideoPlayer
          visible={this.state.playerVisible}
          videoId={this.state.currentVideo}
          hidePlayer={this.hidePlayer}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
