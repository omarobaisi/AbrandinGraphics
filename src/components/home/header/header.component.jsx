import React from "react";
import "./Header.scss";
import Button from "../../button/UnderlineButton/underlineButton-component";
import stickerGIF from "./img/sticker.gif";

function Header(props) {
  const scroll = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-info">
          <div className="header-text">
            <div className="header-first-text">
              <div>We are a</div>
              <div className="header-photo">
                <img src={stickerGIF} alt="" />
              </div>
            </div>
            <div>graphic design</div>
            <div>studio</div>
          </div>
          <div className="header-button">
            <Button text={"contact us"} work={scroll} />
          </div>
        </div>
        <div className="header-photo-mobile">
          <img src={stickerGIF} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
