import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";

function Links({ name, link, behavior }) {
  const location = useLocation();

  return (
    <Link
      className={link === location.pathname ? "active-link" : "link"}
      to={link}
      onClick={() => behavior()}
    >
      {name}
    </Link>
  );
}

export default Links;
