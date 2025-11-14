import * as React from "react"
const ServersRackSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={480}
    fontFamily="sans-serif"
    {...props}
  >
    <rect
      width={200}
      height={480}
      stroke="#111"
      strokeWidth={2}
      className="rack-frame"
      rx={6}
      ry={6}
    />
    <g className="server-units">
      
    </g>
  </svg>
)
export default ServersRackSVG
