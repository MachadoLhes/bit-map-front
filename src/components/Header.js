import React from "react";

const Header = props => {
  return (
    <div className="header">
			<h3>{props.pageTitle}</h3>
    </div>
  );
};

export default Header;
