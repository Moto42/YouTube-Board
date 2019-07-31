import React from "react";
import icon_youtube from "../images/youtube-icon.png";
import "./Header.css"

function Header() {
  return (
    <header>
      <img src={icon_youtube} alt="YouTube" className="yt-icon" />
      <p className="logoText">
        YouTube Soundboard
      </p>
    </header>
  )
};

export default Header;
