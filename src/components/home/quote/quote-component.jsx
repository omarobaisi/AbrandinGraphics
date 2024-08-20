import React from "react";
import "./Quote.scss";

function Quote(props) {
  return (
    <div className="quote">
      <div className="the-quote desktop-quote">
        "The studio led us to a smarter, right and of course beautiful area."
      </div>
      <div className="the-quote mobile-quote">
        <div>"The studio led us</div>
        <div>to a smarter,</div>
        <div>right and of course</div>
        <div>beautiful area."</div>
      </div>
      <div className="author">Lidya Sofer, Trullion</div>
    </div>
  );
}

export default Quote;
