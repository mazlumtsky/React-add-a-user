import React from "react";

function WetherFC(props) {
  // rfce
  return (
    <div>
      bugün hava  <span style={props.style}>{props.status}</span>.

    </div>
  );
}
WetherFC.defaultProps ={
  status: "güneşli",
  style:{backgroundColor:"blue",color:"white"}
}
export default WetherFC;
