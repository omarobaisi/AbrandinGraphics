import React from "react";
import Button from "../../button/UnderlineButton/underlineButton-component";
import "./Branding.scss";

function Branding(props) {
  const scroll = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="branding-container">
      <div className="branding-info">
        <div className="branding-text">
          <h1>we also do branding from scratch!</h1>
        </div>
        <div className="branding-button">
          <Button text={"contact us"} work={scroll} />
        </div>
      </div>
    </div>
  );
}

export default Branding;
