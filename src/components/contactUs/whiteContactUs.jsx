import "./Contact.scss";
import "./WhiteContact.scss";
import Button from "../button/button3/button3-component";

import c1920 from "./img2/Desktop/1920w/c.png";
import c1728 from "./img2/Macbook/1728w/c.png";
import c1512 from "./img2/Macbook/1512w/c.png";
import c1440 from "./img2/Desktop/1440w/c.png";
import c1280 from "./img2/Macbook/1280w/c.png";
import c1024 from "./img2/Tablet/1024w/c.png";
import c834 from "./img2/Tablet/834w/c.png";
import c430 from "./img2/iPhone/430w/c.png";
import c390 from "./img2/iPhone/390w/c.png";
import c360 from "./img2/Android/c.png";
import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const sendEmail = (e) => {};
  const navigate = useNavigate();

  return (
    <div className="contact-container white-contact-container">
      <div className="contact-box white-contact-box">
        <h2>
          <a
            className="white-contact-link"
            href="mailto:aviad@abrandingraphics.com"
          >
            aviad@abrandingraphics.com
          </a>
        </h2>
        <h2>
          <a className="white-contact-link" href="tel:+972523153355">
            +972 523153355
          </a>
        </h2>
        <h2>
          <a
            className="white-contact-link"
            href="https://waze.com/ul?q=HaCarmel%2014%2C%20Ganey%20Tikva%2C%20Israel&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            HaCarmel 14, Ganey Tikva, Israel
          </a>
        </h2>
        <form
          action="https://formsubmit.co/aviad@abrandingraphics.com"
          method="POST"
          className="contact-form white-contact-form"
        >
          <input
            type="text"
            className="field"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="field"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="text"
            className="field"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            placeholder="Message"
            className="field"
            name="message"
            required
          ></textarea>
          <div className="contact-button">
            <Button text="SEND" work={sendEmail} />
          </div>
        </form>
      </div>
      <div onClick={() => navigate("/accessibility-statement")}>
        <div className="img-1920">
          <p>
            <div>
              <img src={c1920} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-1728">
          <p>
            <div>
              <img src={c1728} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-1512">
          <p>
            <div>
              <img src={c1512} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-1440">
          <p>
            <div>
              <img src={c1440} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-1280">
          <p>
            <div>
              <img src={c1280} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-1024">
          <p>
            <div>
              <img src={c1024} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-834">
          <p>
            <div>
              <img src={c834} alt="" /> 2022 A dev. All rights reserved.
            </div>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
          </p>
        </div>
        <div className="img-430">
          <p>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
            <div>
              <img src={c430} alt="" /> 2022 A dev. All rights reserved.
            </div>
          </p>
        </div>
        <div className="img-390">
          <p>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
            <div>
              <img src={c390} alt="" /> 2022 A dev. All rights reserved.
            </div>
          </p>
        </div>
        <div className="img-360">
          <p>
            <div
              className="contact-privacy"
              onClick={() => navigate("/accessibility-statement")}
            >
              Privacy & Terms
            </div>
            <div>
              <img src={c360} alt="" /> 2022 A dev. All rights reserved.
            </div>
          </p>
        </div>
      </div>
      <div className="social-links">
        <a
          style={{
            color: "black",
          }}
          href={"https://www.instagram.com/abrandingraphics/"}
        >
          Instagram
        </a>
        {"|"}
        <a
          style={{
            color: "black",
          }}
          href={"https://www.facebook.com/profile.php?id=100064328996620"}
        >
          Facebook
        </a>
        {"|"}
        <a
          style={{
            color: "black",
          }}
          href={"https://www.linkedin.com/company/abrandingraphics/"}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
