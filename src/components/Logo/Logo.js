import React from "react";
import Tilt from "react-tilt";

import "./Logo.css";
import faceLogo from "./faceLogo.png";

const Logo = () => {
  return (
    <div className="ma5">
      <Tilt
        className="Tilt br4 shadow-2"
        options={{ max: 40 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner " style={{ justifyContent: "center" }}>
          <img
            style={{
              paddingTop: "5px",
            }}
            src={faceLogo}
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
