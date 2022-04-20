import React from "react";
import './../index.css';

function Header(){

  const headerStyles = {
    fontFamily: 'Numans',
    backgroundColor: '#ffebb5'
  }

  return (
    <div style={headerStyles}>
      <h1>b r a m b l e .</h1>
    </div>
  );
}

export default Header;