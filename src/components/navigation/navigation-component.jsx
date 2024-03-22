import React, { useEffect, useRef, useState } from "react";
import "./Navigation.scss";
import NavIcon from "./NavIcon";
import MobileNavIcon from "./MobileNavIcon";
import CloseIcon from "./CloseIcon";
import Links from "./Links";
import { useLocation } from "react-router-dom";

function Navigation({ showOverlay, setShowOverlay }) {
  const navigationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  const location = useLocation();
  const color = location.pathname.includes("/details") ? "black" : "white";

  const options = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "UX UI",
      link: "/websites",
    },
    {
      name: "Banners",
      link: "/banners",
    },
    {
      name: "Art Direction",
      link: "/landing",
    },
    {
      name: "Print",
      link: "/print",
    },
    {
      name: "Logos",
      link: "/logos",
    },
    {
      name: "Presentation",
      link: "/presentations",
    },
    {
      name: "Signs",
      link: "/signs",
    },
    {
      name: "Social Media",
      link: "/socialmedia",
    },
    {
      name: "Merchandise",
      link: "/merchandise",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Privacy & Terms",
      link: "/accessibility-statement",
    },
    {
      name: "Contact",
      behavior: () =>
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        }),
    },
  ];

  const handleToggle = (event) => {
    event.stopPropagation();
    setShowOverlay(!showOverlay);
  };

  const handleClickOutside = (event) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target)
    ) {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navigation" ref={navigationRef}>
      <div className="nav-icon-wrapper" onClick={handleToggle}>
        {showOverlay ? (
          <CloseIcon />
        ) : isMobile ? (
          <MobileNavIcon color={color} />
        ) : (
          <NavIcon color={color} />
        )}
      </div>
      {showOverlay && (
        <div className="options">
          {options.map((option) => (
            <Links {...option} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;
