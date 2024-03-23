import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Blog.scss";

import Button from "../../button/button2/button2-component";
import Header from "../header/workHeader-component";
import Example from "../example/workExample-component";
import BlogCustomText from "./blog-custom-text.compnont";

import BlogImg1920 from "./img/Desktop/1920w/blog-img.png";
import BlogImg1728 from "./img/Macbook/1728w/blog-img.png";
import BlogImg1512 from "./img/Macbook/1512w/blog-img.png";
import BlogImg1440 from "./img/Desktop/1440w/blog-img.png";
import BlogImg1280 from "./img/Macbook/1280w/blog-img.png";
import BlogImg1024 from "./img/Tablet/1024w/blog-img.png";
import BlogImg834 from "./img/Tablet/834w/blog-img.png";
import BlogImg430 from "./img/iPhone/430w/blog-img.png";
import BlogImg390 from "./img/iPhone/390w/blog-img.png";
import BlogImg360 from "./img/Android/blog-img.png";

function BlogComponent(props) {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("details", { replace: true });
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="blog">
      <Header header="Blog" des="We have a lot to write about" />
      <div className="blog-examples">
        <Example />
        <div className="blog-two-pictures">
          <div className="img-1920">
            <img className="blog-img" src={BlogImg1920} alt="" />
          </div>
          <div className="img-1728">
            <img className="blog-img" src={BlogImg1728} alt="" />
          </div>
          <div className="img-1512">
            <img className="blog-img" src={BlogImg1512} alt="" />
          </div>
          <div className="img-1440">
            <img className="blog-img" src={BlogImg1440} alt="" />
          </div>
          <div className="img-1280">
            <img className="blog-img" src={BlogImg1280} alt="" />
          </div>
          <div className="img-1024">
            <img className="blog-img" src={BlogImg1024} alt="" />
          </div>
          <div className="img-834">
            <img className="blog-img" src={BlogImg834} alt="" />
          </div>
          <div className="img-430">
            <img className="blog-img" src={BlogImg430} alt="" />
          </div>
          <div className="img-390">
            <img className="blog-img" src={BlogImg390} alt="" />
          </div>
          <div className="img-360">
            <img className="blog-img" src={BlogImg360} alt="" />
          </div>
          <div className="blog-custom-right">
            <BlogCustomText nextPage={nextPage} />
          </div>
        </div>
      </div>
      <div className="work-button">
        <Button text="MORE" work={nextPage} />
      </div>
    </div>
  );
}

export default BlogComponent;
