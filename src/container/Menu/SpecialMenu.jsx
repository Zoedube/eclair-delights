import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

// Code for the Menu Section
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Mouth-watering desserts that will transport you to a world of pure indulgence." />
      <h1 className="headtext__cormorant">Our Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_vegan flex__center">
        <p className="app__specialMenu-menu_heading">Vegan Desserts</p>
        <div className="app__specialMenu_menu_items">
          {data.vegan.map((vegan, index) => (
            <MenuItem key={vegan.title + index} title={vegan.title} price={vegan.price} tags={vegan.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.dessertmenu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_traditional  flex__center">
        <p className="app__specialMenu-menu_heading">Traditional Recipes</p>
        <div className="app__specialMenu_menu_items">
          {data.traditional.map((traditional, index) => (
            <MenuItem key={traditional.title + index} title={traditional.title} price={traditional.price} tags={traditional.tags} />
          ))}
        </div>
      </div>
    </div>

  
  </div>
);

export default SpecialMenu;