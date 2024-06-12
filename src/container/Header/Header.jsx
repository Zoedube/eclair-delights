import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className="app__header-h1">Induldge in Sweet Perfection</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>At Eclair Delights, each eclair is crafted with passion and precision. From classic vanilla to exotic flavors, our treats promise a delightful journey for your taste buds. Experience the sweet perfection that sets us apart.</p>
      <button type="button" className="custom__button">Explore Menu</button>
  </div>
  <div className="app__wrapper_img">
    <img src={images.hero} alt="header image"/>

  </div>
  </div>
);

export default Header;
