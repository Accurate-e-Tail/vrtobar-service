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
      <select name="lang" id="lang">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default Links;
