import React from "react";
import "./goal.scss";

import Button from "../../button/UnderlineButton/underlineButton-component";

import challengeAccepted1920 from "./img/Desktop/1920w/challengeAccepted.gif";
import challengeAccepted1728 from "./img/Macbook/1728w/challengeAccepted.gif";
import challengeAccepted1512 from "./img/Macbook/1512w/challengeAccepted.gif";
import challengeAccepted1440 from "./img/Desktop/1440w/challengeAccepted.gif";
import challengeAccepted1280 from "./img/Macbook/1280w/challengeAccepted.gif";

function Goal() {
  const scroll = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="goal">
      <div className="goal-green">
        <h2>Our goal</h2>
        <p> Is to make the world a more beautifal place </p>
        <div className="goal-button">
          <Button text="CONTACT US" work={scroll} />
        </div>
      </div>
      <div className="goal-img">
        <div className="img-1920">
          <img src={challengeAccepted1920} alt="" />
        </div>
        <div className="img-1728">
          <img src={challengeAccepted1728} alt="" />
        </div>
        <div className="img-1512">
          <img src={challengeAccepted1512} alt="" />
        </div>
        <div className="img-1440">
          <img src={challengeAccepted1440} alt="" />
        </div>
        <div className="img-1280">
          <img src={challengeAccepted1280} alt="" />
        </div>
        <div className="img-1024">
          <img src={challengeAccepted1280} alt="" />
        </div>
        <div className="img-834">
          <img src={challengeAccepted1280} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Goal;
