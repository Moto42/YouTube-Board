import React from 'react';
import img_overlay from "../../VideoButton/overlay.png";

function ThumbnailButton(props) {
  const thumbNailUrl = `https://img.youtube.com/vi/${props.vid}/${props.thumbnum}.jpg`

  function _handleClick(e) {
    props.onClick(props.thumbnum);
  }

  return(
    <div className="videoButton" onClick={_handleClick}>
      <img className="videoImg" alt="" src={thumbNailUrl} />
      <img className="buttonOverlay" alt="" src={img_overlay} />
    </div>
  )
}

export default ThumbnailButton;
