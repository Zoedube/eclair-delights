import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsArrowLeftShort, BsArrowRightShort, } from 'react-icons/bs';
import './Gallery.css';

// Code the gallery and menu section
const galleryImages = [images.smallcake,images.matcha,images.choccup,images.dessert,images.profiteroles];

const Gallery = () => {
  const scrollRef = React.useRef(null);


  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <subHeading title="Menu Favourites" />
        <h1 className="headtext__cormorant">Photographic Exhibition Of Our Menu</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>Welcome to our Photographic Exhibition! At Eclair Delights, we believe that every bite is a moment worth capturing. Our gallery showcases a delightful selection of our most beloved creations, each crafted with passion and precision. From our signature éclairs to an array of pastries and desserts, feast your eyes on the artistry that makes our bakery truly special. We hope these images bring as much joy to your eyes as our treats bring to your taste buds.</p>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${ index + 1 }`}>
            <img src={image} alt="gallery image"/>
          </div>
          ))}
      </div>
      

      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

