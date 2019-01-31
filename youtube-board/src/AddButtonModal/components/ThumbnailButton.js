import React from 'react';

function ThumbnailButton(props) {
  const thumbNailUrl = `https://img.youtube.com/vi/${props.vid}/${props.thumbnum}.jpg`

  function _handleClick(e) {
    props.onClick(props.thumbnum);
  }

  return(
    <div className="videoButton" onClick={_handleClick}>
      <img src={thumbNailUrl} />
    </div>
  )
}

export default ThumbnailButton;
