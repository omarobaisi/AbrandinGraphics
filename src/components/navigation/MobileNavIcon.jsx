import React from "react";

function MobileNavIcon({ color = "white" }) {
  return (
    <svg
      width="33"
      height="23"
      viewBox="0 0 33 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="7.39258"
        width="24.6429"
        height="1.64286"
        rx="0.821429"
        fill={color}
      />
      <rect
        y="10.6786"
        width="32.0357"
        height="1.64286"
        rx="0.821429"
        fill={color}
      />
      <rect
        x="18.8926"
        y="21.3571"
        width="13.1429"
        height="1.64286"
        rx="0.821429"
        fill={color}
      />
    </svg>
  );
}

export default MobileNavIcon;
