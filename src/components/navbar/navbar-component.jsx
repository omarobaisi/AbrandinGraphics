import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import Logo from "./img/Logo";

function Navbar({ color, secondaryColor }) {
  const navigate = useNavigate();
  const homePage = () => navigate("/", { replace: true });

  return (
    <div className="navbar">
      <div className="img-1920">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-1728">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={155}
          height={29}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-1512">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={155}
          height={29}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-1440">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={155}
          height={29}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-1280">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={142}
          height={26}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-1024">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={158}
          height={30}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-834">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={136}
          height={26}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-430">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={153}
          height={29}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-390">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={153}
          height={29}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
      <div className="img-360">
        <Logo
          className="navbar-logo"
          onClick={homePage}
          width={153}
          height={29}
          color={color}
          secondaryColor={secondaryColor}
        />
      </div>
    </div>
  );
}

export default Navbar;
