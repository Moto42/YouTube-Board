import React, {Component} from 'react';
import './AddButtonModal.css';

import VIDInput from './components/VIDInput';
import ThumbnailButton from './components/ThumbnailButton';
import YouTube  from 'react-youtube';

class AddButtonModal extends Component {
  constructor(props){
    super(props);
    this.state ={
      vid : "",
    }
    this.setVID       = this.setVID.bind(this);
    this.createButton = this.createButton.bind(this);
  }

  setVID(vid){
    this.setState({vid});
  }

  createButton(n) {
    const addButton = this.props.addButton;
    const button = {
      videoID   : this.state.vid,
      thumbnail : n
    }
    addButton(button);
    this.setState({vid: ''});
    this.props.hideAddbuttonModal();
  }

  render() {
    let className = 'addButtonModal';
    if(this.props.visible) className = className + " visible";
    return(
      <div className={className} >
      <VIDInput output={this.setVID} value={this.state.vid} />
      <div className="thumbsDisplay">
        <ThumbnailButton vid={this.state.vid} thumbnum={1} onClick={ this.createButton } />
        <ThumbnailButton vid={this.state.vid} thumbnum={2} onClick={ this.createButton } />
        <ThumbnailButton vid={this.state.vid} thumbnum={3} onClick={ this.createButton } />
      </div>
      <YouTube videoId={this.state.vid} />

      </div>
    )
  }

}


export default AddButtonModal;
