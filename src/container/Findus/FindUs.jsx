import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

// Code For Find Us Section 
const FindUs = () => (
  <div className="app__bg__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginbottom:"3rem"}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Melrose Arch, H20 & H21, 38 Whiteley Rd, Melrose North, Johannesburg, 2076</p>
        <p className="p__cormorant" style={{ color: "#DCCA87", margin: "2rem 0" }}>Opening Hours</p>
        <p className="p__opensans">Mon-Fri: 12:00 pm - 22:00pm</p>
        <p className="p__opensans">Sat-Sun: 10:00 pm - 00:00am</p>
      </div>
      </div>

      <div className="findus__wrapper_img">
        <img src={images.design} alt="findus" />
      </div>
    </div>
);

export default FindUs;
