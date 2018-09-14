import React from "react";
import MenuItem from "./MenuItem";


const Menu = props => {
	return (
		<div className="menu">
			
			<h2>Aplicações</h2>
            <MenuItem item="Americanas" path="/" />
            <MenuItem item="Atlas" path="/atlas" />
            <MenuItem item="B2W" path="/atlas" />
            <MenuItem item="Homolog-B2W"  path="/atlas"/>
            <MenuItem item="Plataforma"  path="/atlas"/>
            <MenuItem item="Shoptime"  path="/atlas"/>
            <MenuItem item="Submarino" path="/atlas"/>
		</div>
	);
};

export default Menu;