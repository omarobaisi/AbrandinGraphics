import React, { useEffect, useRef, useState } from "react";
import "./Navigation.scss";
import NavIcon from "./NavIcon";
import CloseIcon from "./CloseIcon";
import Links from "./Links";

function Navigation(props) {
  const [open, setOpen] = useState(false);
  const navigationRef = useRef(null);

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
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navigation" ref={navigationRef}>
      <div className="nav-icon-wrapper" onClick={handleToggle}>
        {open ? <CloseIcon /> : <NavIcon />}
      </div>
      {open && (
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
