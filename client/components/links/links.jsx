import React from 'react';

const Links = (props) => {
  return (
    <div className="v_links-section">
      <ul className="v_links-section__list">
        <li className="v_links-section__item"><a href="#">Your Amazon.com</a></li>
        <li className="v_links-section__item"><a href="#">Last-Minute Deals</a></li>
        <li className="v_links-section__item"><a href="#">Gift Cards</a></li>
        <li className="v_links-section__item"><a href="#">Whole Foods</a></li>
        <li className="v_links-section__item"><a href="#">Registry</a></li>
        <li className="v_links-section__item"><a href="#">Sell</a></li>
        <li className="v_links-section__item"><a href="#">Help</a></li>
      </ul>
      <div className="v_links-section__lang">
        <div className="v_links-section__lang--text">EN</div>
        <div className="v_links-section__lang--bottom">
          <div className="v_links-section__lang--image-container">
            <img className="v_links-section__lang--image" src="images/globe.png" alt="globe icon" />
          </div>
          <i className="arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default Links;
