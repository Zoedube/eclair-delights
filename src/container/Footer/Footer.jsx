import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';


// Code for the footer
const Footer = () => (
  <div className="app__footer section__padding" id="footer">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">Melrose Arch, H20 & H21, 38 Whiteley Rd, Melrose North, Johannesburg, 2076</p>
        <p className="p__opensans">010 446 1911</p>
        <p className="p__opensans">011 684 1162</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.eclairdelights} alt="footer_logo" />
        <p className="p__opensans">
          At Eclair Delights, we bring you the finest éclairs and pastries crafted with love and passion. Visit us for an unforgettable sweet experience!
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">10:00 am - 22:00 pm</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">10:00 am - 00:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Designed by Zoe Dube</p>
    </div>
  </div>
);

export default Footer;