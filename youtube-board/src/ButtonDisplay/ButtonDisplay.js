import React from 'react';
import VideoButton from '../VideoButton';
import './ButtonDisplay.css';

function videoMapper(video, playVideo,removeButton) {
  const callback      = typeof playVideo       === "function"? playVideo       : function(nuthin){return};
  const removeBtn     = typeof removeButton    === "function"? removeButton    : function(nuthin){return};
  const videoID       = typeof video.videoID   === "string"  ? video.videoID   : "x4Q108If5WU";
  const thumbnail     = typeof video.thumbnail === "number"  ? video.thumbnail : 1;
  return (
    <VideoButton videoID={videoID} thumbnailNumber={thumbnail} playVideo={callback} removeButton={removeBtn} key={`${videoID}_${thumbnail}`}/>
  );
};

function ButtonDisplay(props){
  const videos = Array.isArray(props.videos) ? props.videos : []
  const videoButtons = videos.map( video => videoMapper(video,props.playVideo,props.removeButton) );
  return (
    <div className="buttonDisplay">
      {props.children}
      {videoButtons}
    </ div>
  )
}

export default ButtonDisplay;
