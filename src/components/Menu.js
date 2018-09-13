import React from "react";
import MenuItem from "./MenuItem";


const Menu = props => {
	return (
		<div className="menu">
			
			<h2>Aplicações</h2>
            <MenuItem className="menu-item-selected" item="Americanas" path="/" />
            <MenuItem className="menu-item" item="Atlas" path="/atlas" />
            <MenuItem className="menu-item" item="B2W" path="/atlas" />
            <MenuItem className="menu-item" item="Homolog-B2W"  path="/atlas"/>
            <MenuItem className="menu-item" item="Plataforma"  path="/atlas"/>
            <MenuItem className="menu-item" item="Shoptime"  path="/atlas"/>
            <MenuItem className="menu-item" item="Submarino" path="/atlas"/>
		</div>
	);
};

export default Menu;