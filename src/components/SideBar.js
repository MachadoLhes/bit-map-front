import React from "react";
import LogoB2W from "../images/logo_b2w.png";
import Menu from "./Menu";

const SideBar = props => {
	return (
		<div className="side-bar">
			<img className="logo-sidebar" src={LogoB2W} alt="Logo B2W"/>
			<h1>MAP API</h1>
			<Menu />
		</div>
	);
};

export default SideBar;
