import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="../../public/logo.png" alt="Logo" />
        <img src="../../public/Vector.png" alt="Vector" />
      </div>
      <ul>
        <li className="home-li-item">Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Features</li>
      </ul>
      <button className="btn">Download</button>
    </nav>
  );
};

export default Navbar;
