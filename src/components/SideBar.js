import React from "react";
import LogoB2W from "../images/logo_b2w.png";
const SideBar = props => {
  const commit = props.commit || null;
  return (
    <div className="side-bar">
		<img className="logo-sidebar" src={LogoB2W} />
        <h1>MAP API</h1>
    </div>
  );
};

export default SideBar;
