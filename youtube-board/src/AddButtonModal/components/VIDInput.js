import React from 'react';

function stripVIDFromUrl(url) {
  let   video_id = url.split('v=')[1];
  const ampersandPosition = video_id.indexOf('&');
  if(ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  return video_id;
}

function isUrl(str) {
  const testFor = [
    ".com",
    "youtube",
    "http:",
    "https:"
  ]
  if(testFor.some( i => str.includes(i) )) return true;
  else return false;
}

function _handlechange(event,callback){
  const vid = isUrl(event.target.value) ? stripVIDFromUrl(event.target.value) : event.target.value;
  callback(vid);
}

function VIDInput(props){
  const output = typeof props.output === "function" ? props.output : e => {return};
  return (
    <input type='text' value={props.value} onChange={event =>{_handlechange(event,output)}} />
  )
};

export default VIDInput;
