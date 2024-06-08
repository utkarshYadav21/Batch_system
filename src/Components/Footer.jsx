import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-lists">
            <h1 className="logo">
              <img src="/logo.png" alt="Logo" />
              <img src="/Vector.png" alt="Vector" />
            </h1>
            <ul className="info-1" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <li className="info">
                <img src="/email.png" alt="Email Icon" />
                <p>Help@Frybix.com</p>
              </li>
              <li className="info">
                <img src="/phone.png" alt="Phone Icon" />
                <p>+1234 456 678 89</p>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <h1>Links</h1>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-lists">
            <h1>Legal</h1>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-lists">
            <h1>Product</h1>
            <ul>
              <li>Take Tour</li>
              <li>Live Chat</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="footer-lists">
            <h1>Newsletter</h1>
            <ul>
              <li>Stay Up To Date</li>
            </ul>
            <input type="text" placeholder="Enter your email" style={{padding:"7px",marginBottom:"5px",borderRadius:"3px"}}/>
            <button className="btn" >Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          Copyright 2022 uifry.com All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
