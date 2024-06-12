import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">


    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
            Welcome to Eclair Delights! We are a bakery committed to offering a wide variety of delicious treats, not just eclairs. Our mission is to satisfy all your sweet cravings with our high-quality baked goods.
            <br /><br />
            From bread and pastries to cakes and cookies, our selection is crafted to delight your taste buds. We use only premium ingredients to ensure every bite is a moment of pure bliss.
            <br /><br />
            Whether you’re here for your morning coffee or a custom cake, we strive to make every visit memorable. Thank you for choosing Eclair Delights. We can't wait to share our passion for baking with you!
        </p>

        <button type="button" className="custom__button">Know More</button>

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.choc} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history ">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
            Eclair Delights started with a dream by our founder, Zoe Dube, who loved baking since childhood. Inspired by family traditions, Zoe wanted to bring the joy of homemade treats to everyone.
            <br /><br />
            In 2010, Zoe opened Eclair Delights in a cozy neighborhood spot. With a few classic recipes, the bakery quickly became popular for its quality and welcoming vibe.
            <br /><br />
            Today, Eclair Delights is a beloved local bakery known for its diverse range of pastries, breads, and desserts. Despite our growth, we remain true to our roots, baking with the same love and care. We look forward to many more years of success with your support.
        </p>

        <button type="button" className="custom__button">Know More</button>

      </div>
    </div>
  </div>
);

export default AboutUs;
