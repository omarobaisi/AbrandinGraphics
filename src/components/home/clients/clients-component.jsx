import React, { useEffect } from "react";
import "./clients.scss";

const c1 = require("./img/c1.png");
const c2 = require("./img/c2.png");
const c3 = require("./img/c3.png");
const c4 = require("./img/c4.png");
const c5 = require("./img/c5.png");
const c6 = require("./img/c6.png");
const c7 = require("./img/c7.png");
const c9 = require("./img/c9.png");
const c10 = require("./img/c10.png");
const c11 = require("./img/c11.png");
const c12 = require("./img/c12.png");
const c13 = require("./img/c13.png");
const c14 = require("./img/c14.png");

const Clients = () => {
  const sliderAnimation = function (speedPixel, repeatEveryMSec) {
    const ImagesContainer = document.querySelector(".clients");
    const offsetWidth = ImagesContainer.offsetWidth;
    const scrollWidth = ImagesContainer.scrollWidth;

    const interval = setInterval(() => {
      ImagesContainer.scrollBy(speedPixel, 0);
      if (offsetWidth + ImagesContainer.scrollLeft >= scrollWidth) {
        clearInterval(interval);
        ImagesContainer.scrollTo({ top: 0, left: 0 });
        sliderAnimation(speedPixel, repeatEveryMSec);
      }
    }, repeatEveryMSec);
  };

  const sliderSpeed = function () {
    const windowWidth = window.innerWidth;

    let speedPixel = 0;
    let repeatEveryMSec = 0;
    if (windowWidth > 1512) {
      speedPixel = 2;
      repeatEveryMSec = 10;
    } else if (windowWidth <= 1512 && windowWidth > 1000) {
      speedPixel = 1;
      repeatEveryMSec = 10;
    } else {
      speedPixel = 1;
      repeatEveryMSec = 15;
    }
    sliderAnimation(speedPixel, repeatEveryMSec);
  };

  useEffect(() => {
    sliderSpeed();
  }, []);

  const images = [
    {
      name: "c1",
      desktop: c1,
    },
    {
      name: "c2",
      desktop: c2,
    },
    {
      name: "c3",
      desktop: c3,
    },
    {
      name: "c4",
      desktop: c4,
    },
    {
      name: "c5",
      desktop: c5,
    },
    {
      name: "c6",
      desktop: c6,
    },
    {
      name: "c7",
      desktop: c7,
    },
    {
      name: "c9",
      desktop: c9,
    },
    {
      name: "c10",
      desktop: c10,
    },
    {
      name: "c11",
      desktop: c11,
    },
    {
      name: "c12",
      desktop: c12,
    },
    {
      name: "c13",
      desktop: c13,
    },
    {
      name: "c14",
      desktop: c14,
    },
  ];

  return (
    <div className="clients">
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
      {images.map((img, i) => (
        <div key={i} className="client">
          <img src={img.desktop} className={img.name} />
        </div>
      ))}
    </div>
  );
};

export default Clients;
