import React from 'react';
import VideoButton from '../VideoButton';
import './ButtonDisplay.css';

function videoMapper(video, playVideo) {
  const callback  = typeof playVideo       === "function"? playVideo       : function(nuthin){return};
  const videoID   = typeof video.videoID   === "string"  ? video.videoID   : "x4Q108If5WU";
  const thumbnail = typeof video.thumbnail === "number"  ? video.thumbnail : 1;
  return (
    <VideoButton videoID={videoID} thumbnailNumber={thumbnail} playVideo={callback} />
  );
};

function ButtonDisplay(props){
  const videos = Array.isArray(props.videos) ? props.videos : []
  const videoButtons = videos.map( video => videoMapper(video,props.playVideo) );
  return (
    <div className="buttonDisplay">
      {props.children}
      {videoButtons}
    </ div>
  )
}

export default ButtonDisplay;
