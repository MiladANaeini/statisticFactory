
import * as React from "react";
const GroundSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1024}
    height={800}
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 500 500",
    }}
    viewBox="0 0 500 500"
    {...props}
  >

    {/* ground */}
    <g>
      <path
        d="M0 425.64h500v4.239H0z"
        style={{
          fill: "#b6db58",
        }}
      />
      <path
        d="M0 429.879h500v7.727H0z"
        style={{
          fill: "#7ac943",
        }}
      />
      <path
        d="M0 437.606h500v62.061H0z"
        style={{
          fill: "#87544d",
        }}
      />
      <path
        d="M0 437.606h500v4.572H0z"
        style={{
          opacity: 0.3,
          fill: "#231f20",
        }}
      />
    </g>
  </svg>
);
export default GroundSVG;
