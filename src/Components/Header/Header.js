import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="text-container">
        <h1 className="heading">deel.</h1>
        <p className="subheading">Platform</p>
      </div>
      {/* Add any other header content as needed */}
    </header>
  );
}

export default Header;
