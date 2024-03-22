import React from "react";

function NavIcon({ color = "white" }) {
  return (
    <svg
      width="39"
      height="28"
      viewBox="0 0 39 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="9" width="30" height="2" rx="1" fill={color} />
      <rect y="13" width="39" height="2" rx="1" fill={color} />
      <rect x="23" y="26" width="16" height="2" rx="1" fill={color} />
    </svg>
  );
}

export default NavIcon;
