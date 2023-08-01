import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Rhode Ecommerce site Django and React</h1>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Email: rhodrickmhone@gmail.com</li>
              <li>Phone: +265995084312</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
