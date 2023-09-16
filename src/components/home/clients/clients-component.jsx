import React, { useEffect } from "react";
import "./clients.scss";

const pango = require("./img2/Pango.png");
const client2 = require("./img2/Client2.png");
const client1 = require("./img2/Client1.png");
const yellow = require("./img2/Yellow.png");
const el = require("./img2/el.png");
const rise = require("./img2/rise.png");
const primis = require("./img2/Primis.png");
const cobwebs = require("./img2/Cobwebs.png");
const trullion = require("./img2/Trullion.png");

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
      name: "pango",
      desktop: pango,
    },
    {
      name: "client2",
      desktop: client2,
    },
    {
      name: "client1",
      desktop: client1,
    },
    {
      name: "yellow",
      desktop: yellow,
    },
    {
      name: "el",
      desktop: el,
    },
    {
      name: "rise",
      desktop: rise,
    },
    {
      name: "primis",
      desktop: primis,
    },
    {
      name: "cobwebs",
      desktop: cobwebs,
    },
    {
      name: "trullion",
      desktop: trullion,
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
