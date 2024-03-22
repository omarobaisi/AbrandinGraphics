import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Merchandise.scss";

import Button from "../../button/button2/button2-component";
import Header from "../header/workHeader-component";
import Example from "../example/workExample-component";

import PicOnot1920 from "./img/Desktop/1920w/PicOnot.webp";
import PicOnot1728 from "./img/Macbook/1728w/PicOnot.webp";
import PicOnot1512 from "./img/Macbook/1512w/PicOnot.webp";
import PicOnot1440 from "./img/Desktop/1440w/PicOnot.webp";
import PicOnot1280 from "./img/Macbook/1280w/PicOnot.webp";
import PicOnot1024 from "./img/Tablet/1024w/PicOnot.webp";
import PicOnot834 from "./img/Tablet/834w/PicOnot.webp";
import PicOnot430 from "./img/iPhone/430w/PicOnot.webp";
import PicOnot390 from "./img/iPhone/390w/PicOnot.webp";
import PicOnot360 from "./img/Android/PicOnot.webp";

import Wearing1920 from "./img/Desktop/1920w/Wearing.png";
import Wearing1728 from "./img/Macbook/1728w/Wearing.png";
import Wearing1512 from "./img/Macbook/1512w/Wearing.png";
import Wearing1440 from "./img/Desktop/1440w/Wearing.png";
import Wearing1280 from "./img/Macbook/1280w/Wearing.png";
import Wearing1024 from "./img/Tablet/1024w/Wearing.png";
import Wearing834 from "./img/Tablet/834w/Wearing.png";
import Wearing430 from "./img/iPhone/430w/Wearing.png";
import Wearing390 from "./img/iPhone/390w/Wearing.png";
import Wearing360 from "./img/Android/Wearing.png";

function MerchandiseComponent(props) {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/websites", { replace: true });
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="merchandise">
      <Header header="Merchandise" des="Just choose" />
      <div className="merchandise-examples">
        <Example
          first="Example of shirts for “Onot”."
          second="A nursery in the style of the establishment of the State of Israel."
          third="The employees wanted two shirts - for girls and boys."
        />
        <div className="merchandise-pictures">
          <div className="img-1920">
            <img className="merchandise-img" src={PicOnot1920} alt="" />
          </div>
          <div className="img-1728">
            <img className="merchandise-img" src={PicOnot1728} alt="" />
          </div>
          <div className="img-1512">
            <img className="merchandise-img" src={PicOnot1512} alt="" />
          </div>
          <div className="img-1440">
            <img className="merchandise-img" src={PicOnot1440} alt="" />
          </div>
          <div className="img-1280">
            <img className="merchandise-img" src={PicOnot1280} alt="" />
          </div>
          <div className="img-1024">
            <img className="merchandise-img" src={PicOnot1024} alt="" />
          </div>
          <div className="img-834">
            <img className="merchandise-img" src={PicOnot834} alt="" />
          </div>
          <div className="img-430">
            <img className="merchandise-img" src={PicOnot430} alt="" />
          </div>
          <div className="img-390">
            <img className="merchandise-img" src={PicOnot390} alt="" />
          </div>
          <div className="img-360">
            <img className="merchandise-img" src={PicOnot360} alt="" />
          </div>
        </div>
      </div>
      <div className="merchandise-examples">
        <Example first="An apron with a logo on it that we made for ‘Fishkado’. Fish Store" />
        <div className="merchandise-pictures">
          <div className="img-1920">
            <img className="merchandise-img" src={Wearing1920} alt="" />
          </div>
          <div className="img-1728">
            <img className="merchandise-img" src={Wearing1728} alt="" />
          </div>
          <div className="img-1512">
            <img className="merchandise-img" src={Wearing1512} alt="" />
          </div>
          <div className="img-1440">
            <img className="merchandise-img" src={Wearing1440} alt="" />
          </div>
          <div className="img-1280">
            <img className="merchandise-img" src={Wearing1280} alt="" />
          </div>
          <div className="img-1024">
            <img className="merchandise-img" src={Wearing1024} alt="" />
          </div>
          <div className="img-834">
            <img className="merchandise-img" src={Wearing834} alt="" />
          </div>
          <div className="img-430">
            <img className="merchandise-img" src={Wearing430} alt="" />
          </div>
          <div className="img-390">
            <img className="merchandise-img" src={Wearing390} alt="" />
          </div>
          <div className="img-360">
            <img className="merchandise-img" src={Wearing360} alt="" />
          </div>
        </div>
      </div>
      <div className="work-button">
        <Button text="NEXT" work={nextPage} />
      </div>
    </div>
  );
}

export default MerchandiseComponent;
