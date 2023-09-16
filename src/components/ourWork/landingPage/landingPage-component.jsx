import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Landing.scss";

import art1w1920 from "./img/Desktop/1920w/art1.png";
import art1w1728 from "./img/Macbook/1728w/art1.png";
import art1w1512 from "./img/Macbook/1512w/art1.png";
import art1w1440 from "./img/Desktop/1440w/art1.png";
import art1w1280 from "./img/Macbook/1280w/art1.png";
import art1w1024 from "./img/Tablet/1024w/art1.png";
import art1w834 from "./img/Tablet/834w/art1.png";
import art1w430 from "./img/iPhone/430w/art1.png";
import art1w390 from "./img/iPhone/390w/art1.png";
import art1w360 from "./img/Android/art1.png";

import art2w1920 from "./img/Desktop/1920w/art2.png";
import art2w1728 from "./img/Macbook/1728w/art2.png";
import art2w1512 from "./img/Macbook/1512w/art2.png";
import art2w1440 from "./img/Desktop/1440w/art2.png";
import art2w1280 from "./img/Macbook/1280w/art2.png";
import art2w1024 from "./img/Tablet/1024w/art2.png";
import art2w834 from "./img/Tablet/834w/art2.png";
import art2w430 from "./img/iPhone/430w/art2.png";
import art2w390 from "./img/iPhone/390w/art2.png";
import art2w360 from "./img/Android/art2.png";

import art3w1920 from "./img/Desktop/1920w/art3.png";
import art3w1728 from "./img/Macbook/1728w/art3.png";
import art3w1512 from "./img/Macbook/1512w/art3.png";
import art3w1440 from "./img/Desktop/1440w/art3.png";

import Button from "../../button/button2/button2-component";
import Header from "../header/workHeader-component";
import Example from "../example/workExample-component";

function LandingComponent(props) {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/print", { replace: true });
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="landing">
      <Header header="Art Direction" des="Photoshoots for companies" />
      <div className="landing-examples">
        <Example first="Making mockups for Fiverr's marketing design team needs." />
        <div className="landing-two-pictures">
          <div className="landing-art1">
            <div className="img-1920">
              <img src={art1w1920} alt="" />
            </div>
            <div className="img-1728">
              <img src={art1w1728} alt="art1w1728" />
            </div>
            <div className="img-1512">
              <img src={art1w1512} alt="art1w1512" />
            </div>
            <div className="img-1440">
              <img src={art1w1440} alt="art1w1440" />
            </div>
            <div className="img-1280">
              <img src={art1w1280} alt="art1w1280" />
            </div>
            <div className="img-1024">
              <img src={art1w1024} alt="art1w1024" />
            </div>
            <div className="img-834">
              <img src={art1w834} alt="art1w834" />
            </div>
            <div className="img-430">
              <img src={art1w430} alt="art1w430" />
            </div>
            <div className="img-390">
              <img src={art1w390} alt="art1w390" />
            </div>
            <div className="img-360">
              <img src={art1w360} alt="art1w360" />
            </div>
          </div>
          <div className="landing-ar2">
            <div className="img-1920">
              <img src={art2w1920} alt="art2w1920" />
            </div>
            <div className="img-1728">
              <img src={art2w1728} alt="art2w1728" />
            </div>
            <div className="img-1512">
              <img src={art2w1512} alt="art2w1512" />
            </div>
            <div className="img-1440">
              <img src={art2w1440} alt="art2w1440" />
            </div>
            <div className="img-1280">
              <img src={art2w1280} alt="art2w1280" />
            </div>
            <div className="img-1024">
              <img src={art2w1024} alt="art2w1024" />
            </div>
            <div className="img-834">
              <img src={art2w834} alt="art2w834" />
            </div>
            <div className="img-430">
              <img src={art2w430} alt="art2w430" />
            </div>
            <div className="img-390">
              <img src={art2w390} alt="art2w390" />
            </div>
            <div className="img-360">
              <img src={art2w360} alt="art2w360" />
            </div>
          </div>
          <div className="landing-ar3">
            <div className="img-1920">
              <img src={art3w1920} alt="art3w1920" />
            </div>
            <div className="img-1728">
              <img src={art3w1728} alt="art3w1728" />
            </div>
            <div className="img-1512">
              <img src={art3w1512} alt="art3w1512" />
            </div>
            <div className="img-1440">
              <img src={art3w1440} alt="art3w1440" />
            </div>
          </div>
        </div>
      </div>
      <div className="work-button">
        <Button text="NEXT" work={nextPage} />
      </div>
    </div>
  );
}

export default LandingComponent;
